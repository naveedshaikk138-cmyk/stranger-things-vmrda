import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/poster.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      />

      {/* Book Now Button */}
      <button
        onClick={() => router.push("/book")}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "16px 48px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#e50914",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          zIndex: 2,
          boxShadow: "0 0 20px rgba(229,9,20,0.6)",
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
}
