import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      <button className="bookBtn" onClick={() => router.push("/book")}>
        BOOK NOW
      </button>

      <style jsx>{`
        .page {
          width: 100vw;
          height: 100vh;
          background-color: black;
          background-image: url("/poster-desktop.jpg.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
          position: relative;
        }

        .bookBtn {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          padding: 14px 42px;
          font-size: 18px;
          font-weight: bold;
          background: red;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }

        .bookBtn:hover {
          background: darkred;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .page {
            background-image: url("/poster-mobile.jpg.png");
            background-size: contain;
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
}import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      {/* Invisible clickable area over poster button */}
      <button
        className="posterBtn"
        onClick={() => router.push("/book")}
        aria-label="Book Your Seats"
      />

      <style jsx>{`
        .page {
          width: 100vw;
          height: 100vh;
          background-color: black;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          position: relative;
          background-image: url("/index-poster-desktop.jpg");
        }

        /*
          Clickable area positioned
          over "BOOK YOUR SEATS NOW!" in poster
        */
        .posterBtn {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 11%;
          width: 55%;
          max-width: 420px;
          height: 64px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        /* Optional hover glow (desktop only) */
        .posterBtn:hover {
          box-shadow: 0 0 25px rgba(255, 80, 0, 0.6);
          border-radius: 40px;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .page {
            background-image: url("/index-poster-mobile.jpg");
          }

          .posterBtn {
            bottom: 13%;
            width: 75%;
            height: 58px;
          }
        }
      `}</style>
    </div>
  );
}
