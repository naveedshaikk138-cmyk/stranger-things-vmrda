import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      {/* Ambient layers */}
      <div className="pulse" />
      <div className="fog" />
      <div className="embers" />

      {/* Poster */}
      <div className="poster" />

      {/* Book button */}
      <button className="bookBtn" onClick={() => router.push("/book")}>
        BOOK NOW
      </button>

      <style jsx>{`
        .page {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: black;
        }

        /* 🔴 PULSING RED ENERGY */
        .pulse {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(255, 0, 0, 0.35),
            rgba(0, 0, 0, 0.95) 70%
          );
          animation: pulse 6s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        /* 🌫 MOVING FOG */
        .fog {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(255, 0, 0, 0.08),
            rgba(0, 0, 0, 0.9),
            rgba(255, 0, 0, 0.08)
          );
          animation: fogMove 20s linear infinite;
          z-index: 1;
        }

        @keyframes fogMove {
          from {
            transform: translateX(-20%);
          }
          to {
            transform: translateX(20%);
          }
        }

        /* 🔥 EMBERS */
        .embers {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(255, 80, 0, 0.6) 2px, transparent 3px),
            radial-gradient(circle, rgba(255, 40, 0, 0.5) 1.5px, transparent 3px),
            radial-gradient(circle, rgba(255, 100, 0, 0.4) 2px, transparent 4px);
          background-size: 120px 120px;
          animation: embers 12s linear infinite;
          z-index: 2;
        }

        @keyframes embers {
          from {
            background-position: 0 100%;
          }
          to {
            background-position: 0 0;
          }
        }

        /* 🎥 POSTER */
        .poster {
          position: absolute;
          inset: 0;
          background-image: url("/poster-desktop.jpg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          z-index: 3;

          /* Glow flicker */
          filter: drop-shadow(0 0 25px rgba(255, 0, 0, 0.5));
          animation: glowFlicker 4s infinite;
        }

        @keyframes glowFlicker {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(255, 0, 0, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(255, 0, 0, 0.7));
          }
        }

        /* 🔘 BUTTON */
        .bookBtn {
          position: absolute;
          z-index: 4;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 42px;
          font-size: 18px;
          font-weight: bold;

          background: #ff0000;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;

          box-shadow:
            0 0 20px rgba(255, 0, 0, 0.7),
            0 0 40px rgba(255, 0, 0, 0.5);
        }

        .bookBtn:hover {
          background: #cc0000;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .poster {
            background-image: url("/poster-mobile.jpg.jpeg");
          }

          .bookBtn {
            bottom: 10%;
            font-size: 16px;
            padding: 12px 32px;
          }
        }
      `}</style>
    </div>
  );
}
