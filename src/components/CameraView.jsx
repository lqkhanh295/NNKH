import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import fp from "fingerpose";
import { drawHand } from "../utils/drawHand";
import { gestures } from "../utils/Gestures";
import "../styles/CameraView.css";

const CameraView = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentGesture, setCurrentGesture] = useState(null);
  const [isModelLoading, setIsModelLoading] = useState(true);

  const runHandpose = async () => {
    setIsModelLoading(true);
    const net = await handpose.load();
    setIsModelLoading(false);
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator(gestures);
        const gesture = await GE.estimate(hand[0].landmarks, 8.0);
        
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map((prediction) => prediction.score);
          const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
          setCurrentGesture(gesture.gestures[maxConfidence].name);
        } else {
            setCurrentGesture(null);
        }
      } else {
          setCurrentGesture(null);
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div className="camera-container">
      {isModelLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Loading AI Model...</p>
        </div>
      )}
      <Webcam
        ref={webcamRef}
        className="webcam"
        muted={true}
      />
      <canvas ref={canvasRef} className="output-canvas" />
      
      <div className="gesture-display">
        {currentGesture ? (
          <>
            <span className="gesture-label">Detected Sign:</span>
            <span className="gesture-value">{currentGesture}</span>
          </>
        ) : (
          <span className="gesture-label">Waiting for sign...</span>
        )}
      </div>
    </div>
  );
};

export default CameraView;
