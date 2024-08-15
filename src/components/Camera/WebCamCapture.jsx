import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as tflite from "@tensorflow/tfjs-tflite";
import * as tf from "@tensorflow/tfjs";
import p_class from "../../model/classes.json";
import p_model from "../../model/model.tflite";

const WebCamCapture = ({ isLive }) => {
  const webcamRef = useRef(null);
  const [model, setModel] = useState(null);
  const [classes, setClasses] = useState([]);
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    const loadModel = async () => {
      // await tf.setBackend("cpu"); // Ensure the correct backend is used
      // await tf.ready();
      const tfliteModel = await tflite.loadTFLiteModel(p_model);
      setModel(tfliteModel);
    };

    const loadClasses = async () => {
      const classesJson = p_class;
      setClasses(classesJson);
    };

    loadModel();
    loadClasses();
  }, []);

  const processFrame = useCallback(async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoTensor = tf.browser.fromPixels(video);

      // Preprocess the frame (resize, normalize, etc.) as required by your model
      const resizedTensor = tf.image.resizeBilinear(videoTensor, [
        inputHeight,
        inputWidth,
      ]);
      const normalizedTensor = resizedTensor.div(255.0).expandDims(0);

      const prediction = await model.predict(normalizedTensor);

      const predictedClassIndex = prediction.argMax(-1).dataSync()[0];
      setPrediction(classes[predictedClassIndex]);

      tf.dispose(videoTensor);
      tf.dispose(resizedTensor);
      tf.dispose(normalizedTensor);
    }
  }, [model, classes]);

  useEffect(() => {
    const interval = setInterval(() => {
      processFrame();
    }, 100);

    return () => clearInterval(interval);
  }, [processFrame]);

  return (
    <div className="w-fulll h-full">
      {isLive && (
        <Webcam
          ref={webcamRef}
          style={{ width: "100%", height: "100%" }}
          videoConstraints={{
            width: 640,
            height: 480,
            facingMode: "user",
          }}
        />
      )}

      {!isLive && (
        <div className="bg-gray-200 w-full h-full flex items-center justify-center">
          <p className="text-gray-500">Webcam is off</p>
        </div>
      )}
      <div className="prediction">{prediction}</div>
    </div>
  );
};

export default WebCamCapture;
