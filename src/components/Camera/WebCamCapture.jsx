/* eslint-disable no-unused-vars */
import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import {
  FilesetResolver,
  GestureRecognizer,
  DrawingUtils,
} from "@mediapipe/tasks-vision";
import model from "../../model/visiorec.task";

const WebCamCapture = ({ isLive, facingMode, handleInterpretUpdate }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [gestureRecognizer, setGestureRecognizer] = useState(null);
  const [prediction, setPrediction] = useState("");
  const videoHeight = "360px";
  const videoWidth = "580px";
  const runningMode = "VIDEO";

  // Initialize the gesture recognizer
  const createGestureRecognizer = async () => {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
    );
    const recognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: model,
        delegate: "GPU",
      },
      numHands: 2,
      runningMode: runningMode,
    });
    setGestureRecognizer(recognizer);
  };

  // Load the model on component mount
  useEffect(() => {
    createGestureRecognizer();
  }, []);

  // Process each video frame for gesture recognition
  const processFrame = useCallback(async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4 &&
      gestureRecognizer
    ) {
      const video = webcamRef.current.video;
      const nowInMs = Date.now();
      const results = gestureRecognizer.recognizeForVideo(video, nowInMs);

      if (results.landmarks && canvasRef.current) {
        const canvasCtx = canvasRef.current.getContext("2d");
        const drawingUtils = new DrawingUtils(canvasCtx);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Adjust canvas dimensions based on the video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-canvas.width, 0);
        for (const landmarks of results.landmarks) {
          drawingUtils.drawConnectors(
            landmarks,
            GestureRecognizer.HAND_CONNECTIONS,
            {
              color: "#00FF00",
              lineWidth: 5,
            }
          );
          drawingUtils.drawLandmarks(landmarks, {
            color: "#FF0000",
            lineWidth: 2,
          });
        }

        // Update prediction
        if (results.gestures.length > 0) {
          const categoryName = results.gestures[0][0].categoryName;
          const categoryScore = parseFloat(
            results.gestures[0][0].score * 100
          ).toFixed(2);
          const handedness = results.handednesses[0][0].displayName;
          setPrediction(
            `GestureRecognizer: ${categoryName}\nConfidence: ${categoryScore}%\nHandedness: ${handedness}`
          );
          handleInterpretUpdate(categoryName);
        } else {
          setPrediction("No gesture detected");
        }
      }
    }
  }, [gestureRecognizer]);

  // Start the gesture recognition loop
  useEffect(() => {
    const interval = setInterval(() => {
      processFrame();
    }, 100);

    return () => clearInterval(interval);
  }, [processFrame]);

  return (
    <div className="w-full h-full">
      {isLive && (
        <div className="relative w-fit">
          <Webcam
            ref={webcamRef}
            className={`"object-cover -z-10 w-[${videoWidth}] h-[${videoHeight}]`}
            mirrored
            videoConstraints={{
              facingMode: facingMode,
              // Apply the current facing mode
            }}
          />
          <canvas
            ref={canvasRef}
            className={`absolute top-0 z-10 w-[${videoWidth}] h-[${videoHeight}] `}
          />
        </div>
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
