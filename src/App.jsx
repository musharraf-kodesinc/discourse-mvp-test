import React, { useEffect, useRef } from "react";

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.process = {
      env: {
        NODE_ENV: "production",
      },
    };

    // Load CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://community-stg.wowpowers.com/es-build/discourse-community.css";
    link.onload = () => console.log("CSS loaded successfully");
    link.onerror = () => console.error("Failed to load CSS");
    document.head.appendChild(link);

    // Load JavaScript module dynamically
    import("https://community-stg.wowpowers.com/es-build/discourse-community.js?url")
      .then(({ mount }) => {
        mount(containerRef.current);
        console.log("JavaScript module mounted successfully");
      })
      .catch((error) => {
        console.error("Failed to load or mount discourse-community.js:", error);
      });
  }, []);

  return (
    <div>
      <div ref={containerRef} />
    </div>
  );
}
