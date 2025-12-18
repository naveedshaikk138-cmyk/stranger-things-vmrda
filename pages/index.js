import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      {/* Poster layer */}
      <div className="poster" />

      {/* Book button */}
      <button
        className="bookBtn"
        onClick={() => router.push("/book")}
      >
        BOOK NOW
      </button>

      <style jsx>{`
        .page {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;

          /* Stranger Things ambient background */
          background:
            radial-gradient(
              circle at center,
              rgba(255, 0, 0, 0.25),
              rgba(0, 0, 0, 0.95) 70%
            ),
            linear-gradient(
              180deg,
              #200000,
              #000000 60%
            );
        }

        /* Poster stays clean & sharp */
        .poster {
          position: absolute;
          inset: 0;
          background-image: url("/poster-desktop.jpg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          z-index: 1;
        }

        .bookBtn {
          position: absolute;
          z-index: 2;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 40px;
          font-size: 18px;
          font-weight: bold;

          background: #ff0000;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;

          box-shadow:
            0 0 20px rgba(255, 0, 0, 0.6),
            0 0 40px rgba(255, 0, 0, 0.4);
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
