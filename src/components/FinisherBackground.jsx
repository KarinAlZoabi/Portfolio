import { useEffect, useRef } from "react";

const FinisherBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    if (window.FinisherHeader && bgRef.current) {
      new window.FinisherHeader({
        // This targets your custom div
        "count": 10,
        "size": {
          "min": 1300,
          "max": 1500,
          "pulse": 0
        },
        "speed": {
          "x": {
            "min": 0,
            "max": 0.5
          },
          "y": {
            "min": 0,
            "max": 0.6
          }
        },
        "colors": {
          "background": "#9138e5",
          "particles": [
            "#f3f4f6",
            "#000000",
            "#2235e5",
            "#000000",
            "#9f7aea",
            "#ff00ff"
          ]
        },
        "blending": "overlay",
        "opacity": {
          "center": 0.5,
          "edge": 0.05
        },
        "skew": 0,
        "shapes": ["c"]
      });
    }
  }, []);

  return (
    <div
      ref={bgRef}
      className="finisher-header absolute top-0 left-0 w-full h-full z-0"
    ></div>
  );
};

export default FinisherBackground;
