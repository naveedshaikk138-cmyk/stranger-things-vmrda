import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="page">
      {/* Invisible clickable area on poster button */}
      <button
        className="posterBtn"
        onClick={() => router.push("/book")}
        aria-label="Book Your Seats Now"
      />

      <style jsx>{`
        .page {
          width: 100vw;
          height: 100vh;
          background-color: black;

          /* Desktop poster */
          background-image: url("/poster-desktop.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;

          position: relative;
        }

        /*
          This button sits exactly on top of
          "BOOK YOUR SEATS NOW!" in the poster
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
            background-image: url("/poster-mobile.jpeg");
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
