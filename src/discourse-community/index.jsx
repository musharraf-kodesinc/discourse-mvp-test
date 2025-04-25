import React, { useEffect, useRef, useState } from "react";
import "../static/es-build/discourse-community.css";
import { Link, useLocation } from "react-router";

export const DiscourseApp = () => {
  const containerRef = useRef(null);
  const location = useLocation();
  const rootRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/wow-community") {
      import("../static/es-build/discourse-community").then(({ mount }) => {
        if (containerRef.current) {
          rootRef.current = mount(containerRef.current);
        }
      });
    }

    return () => {
      if (rootRef.current) {
        import("../static/es-build/discourse-community").then(({ unmount }) => {
          unmount(rootRef.current);
          rootRef.current = null;
        });
      }
    };
  }, [location.pathname]);

  return (
    <div>
      {location.pathname === "/wow-community" && <div ref={containerRef} />}
      <button style={{ margin: 200, backgroundColor: "yellow" }}>
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
};

// useEffect(() => {
//   window.process = {
//     env: {
//       NODE_ENV: "production",
//     },
//   };

//   // Load CSS dynamically
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = "https://community-stg.wowpowers.com/es-build/discourse-community.css";
//   link.onload = () => console.log("CSS loaded successfully");
//   link.onerror = () => console.error("Failed to load CSS");
//   document.head.appendChild(link);

//   // Load JavaScript module dynamically
//   import("https://community-stg.wowpowers.com/es-build/discourse-community.js?url")
//     .then(({ mount }) => {
//       mount(containerRef.current);
//       console.log("JavaScript module mounted successfully");
//     })
//     .catch((error) => {
//       console.error("Failed to load or mount discourse-community.js:", error);
//     });
// }, []);
