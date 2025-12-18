import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      {/* Desktop Poster */}
      <img
        src="/poster-desktop.jpg.png"
        className="poster desktop"
        alt="Stranger Things Watch Party"
      />

      {/* Mobile Poster */}
      <img
        src="/poster-mobile.jpg.png"
        className="poster mobile"
        alt="Stranger Things Watch Party Mobile"
      />

      {/* Book Now Button */}
      <button
        className="bookBtn"
        onClick={() => router.push("/book")}
      >
        BOOK NOW
      </button>

      <style jsx>{`
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .poster {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .desktop {
          display: block;
        }

        .mobile {
          display: none;
        }

        .bookBtn {
          position: absolute;
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
          z-index: 10;
        }

        .bookBtn:hover {
          background: darkred;
        }

        /* Mobile View */
        @media (max-width: 768px) {
          .desktop {
            display: none;
          }
          .mobile {
            display: block;
          }

          .bookBtn {
            bottom: 10%;
            font-size: 16px;
            padding: 12px 30px;
          }
        }
      `}</style>
    </div>
  );
}
