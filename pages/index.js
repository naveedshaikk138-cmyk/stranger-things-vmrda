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
}
