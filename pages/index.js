import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      {/* BACKGROUND EFFECT */}
      <div className="ambient" />

      {/* POSTER */}
      <div className="poster" />

      {/* BUTTON */}
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

        /* 🔥 THIS FILLS THE BLACK GAPS */
        .ambient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              rgba(255, 0, 0, 0.55),
              rgba(0, 0, 0, 0.95) 70%
            ),
            linear-gradient(
              180deg,
              #3b0000,
              #000000 60%
            );
          filter: blur(40px);
          animation: pulse 5s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }

        /* POSTER */
        .poster {
          position: absolute;
          inset: 0;
          background-image: url("/poster-desktop.jpg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          z-index: 2;
        }

        /* BUTTON */
        .bookBtn {
          position: absolute;
          z-index: 3;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 40px;
          font-size: 18px;
          font-weight: bold;
          background: red;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(255,0,0,0.7);
        }

        .bookBtn:hover {
          background: darkred;
        }

        /* MOBILE */
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
