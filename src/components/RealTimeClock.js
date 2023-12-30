"use client";
import { useEffect, useState } from "react";

const RealTimeClock = () => {
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const updateTimestamp = () => {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "numeric",
        hour12: false,
      };

      const now = new Date();
      const formattedTimestamp = now.toLocaleString("en-US", options);
      setTimestamp(formattedTimestamp);
    };

    const intervalId = setInterval(updateTimestamp, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        writingMode: "vertical-lr",
        textOrientation: "mixed",
        whiteSpace: "nowrap",
        position: "absolute",
        bottom: "20px",
        left: "10px",
      }}
    >
      <p className="greenFontStyle">{timestamp}</p>
    </div>
  );
};

export default RealTimeClock;
