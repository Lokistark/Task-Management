import React, { useRef, useEffect } from "react";

import planet1 from "../assets/planet1.png";
import planet2 from "../assets/planet2.png";
import planet3 from "../assets/planet3.png";
import planet4 from "../assets/planet4.png";
import planet5 from "../assets/planet5.png";
import planet6 from "../assets/planet6.png";
import planet7 from "../assets/planet7.png";
import planet8 from "../assets/planet8.png";
import planet9 from "../assets/planet9.png";
import planet10 from "../assets/planet10.png";
import planet11 from "../assets/planet11.png";
import planet12 from "../assets/planet12.png";
import planet13 from "../assets/planet13.png";
import planet14 from "../assets/planet14.png";
import planet15 from "../assets/planet15.png";
import planet16 from "../assets/planet16.png";

const NUM_STARS = 200;
function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const Galaxy = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: NUM_STARS }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: randomBetween(1, 2.5),
      phase: Math.random() * Math.PI * 2,
      speed: randomBetween(0.03, 0.08)
    }));

    function drawStars(time) {
      ctx.fillStyle = "#000";
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.phase += star.speed;
        const alpha = 0.5 + 0.5 * Math.sin(star.phase);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = alpha;
        ctx.fill();
      });
    }

    function animate(time) {
      drawStars(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    return () => {
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        style={{
          width: "100vw",
          height: "100vh"
        }}
      />

      <img src={planet1} className="absolute top-8 left-12 w-8 h-8 animate-pulse" alt="planet" />
      <img src={planet2} className="absolute top-[17vh] left-[35vw] w-10 h-10 rotate-6" alt="planet" />
      <img src={planet3} className="absolute top-[9vh] right-[21vw] w-7 h-7" alt="planet" />
      <img src={planet4} className="absolute top-[27vh] right-8 w-12 h-12 animate-spin-slow" alt="planet" />
      <img src={planet5} className="absolute top-[41vh] left-[8vw] w-10 h-10 rotate-12" alt="planet" />
      <img src={planet6} className="absolute top-[51vh] right-[32vw] w-8 h-8" alt="planet" />
      <img src={planet7} className="absolute bottom-[16vh] left-[18vw] w-9 h-9 animate-pulse" alt="planet" />
      <img src={planet8} className="absolute bottom-16 right-[17vw] w-8 h-8" alt="planet" />
      <img src={planet9} className="absolute bottom-[7vh] left-44 w-9 h-9 rotate-12" alt="planet" />
      <img src={planet10} className="absolute bottom-[10vh] right-20 w-12 h-12 animate-spin" alt="planet" />
      <img src={planet11} className="absolute bottom-[31vh] left-[49vw] w-8 h-8" alt="planet" />
      <img src={planet12} className="absolute top-[33vh] right-[8vw] w-11 h-11 hover:scale-125 transition-transform duration-300" alt="planet" />
      <img src={planet13} className="absolute top-[58vh] left-[23vw] w-9 h-9 animate-pulse" alt="planet" />
      <img src={planet14} className="absolute bottom-[21vh] right-[33vw] w-8 h-8 rotate-3" alt="planet" />
      <img src={planet15} className="absolute top-[45vh] left-96 w-8 h-8" alt="planet" />
      <img src={planet16} className="absolute top-[13vh] right-[2vw] w-8 h-8 hover:brightness-125" alt="planet" />

    </div>
  );
};

export default Galaxy;
