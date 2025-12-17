import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Desktop Poster */}
      <div className="desktop">
        <div className="poster desktopPoster">
          <button onClick={() => router.push("/book")} className="btn">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Mobile Poster */}
      <div className="mobile">
        <div className="poster mobilePoster">
          <button onClick={() => router.push("/book")} className="btn">
            BOOK NOW
          </button>
        </div>
      </div>

      <style jsx>{`
        .poster {
          width: 100vw;
          height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          background-color: black;
        }

        .desktopPoster {
          background-image: url("/poster-desktop.jpg");
        }

        .mobilePoster {
          background-image: url("/poster-mobile.jpg");
        }

        .btn {
          margin-bottom: 40px;
          padding: 16px 48px;
          font-size: 18px;
          font-weight: bold;
          background-color: #e50914;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(229, 9, 20, 0.6);
        }

        .mobile {
          display: none;
        }

        .desktop {
          display: block;
        }

        @media (max-width: 768px) {
          .desktop {
            display: none;
          }
          .mobile {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
