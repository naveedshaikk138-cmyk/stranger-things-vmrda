import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      {/* Blurred background fill */}
      <div className="bg" />

      {/* Sharp poster */}
      <div className="poster" />

      {/* Button */}
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

        /* 🔥 FULL-SCREEN FILL (NO GAPS) */
        .bg {
          position: absolute;
          inset: 0;
          background-image: url("/poster-desktop.jpg.png");
          background-size: cover;
          background-position: center;
          filter: blur(50px) brightness(0.7);
          transform: scale(1.1);
          z-index: 0;
        }

        /* 🖼 CLEAN POSTER */
        .poster {
          position: absolute;
          inset: 0;
          background-image: url("/poster-desktop.jpg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          z-index: 1;
        }

        /* 🔘 BUTTON */
        .bookBtn {
          position: absolute;
          z-index: 2;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 44px;
          font-size: 18px;
          font-weight: bold;
          background: red;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.7);
        }

        .bookBtn:hover {
          background: darkred;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .bg,
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
