import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: 20,
      textAlign: "center"
    }}>
      
      <h1 style={{ fontSize: 36 }}>🎬 Stranger Things Finale Screening</h1>

      <p style={{ marginTop: 10 }}>📍 VMRDA Children’s Arena</p>
      <p>🕙 10 AM – 1 PM</p>
      <p>📅 01/01/2026</p>
      <p>🎟 Entry Fee: ₹157</p>

      {/* Poster image */}
      <img
        src="/poster.jpg"
        alt="Stranger Things Poster"
        style={{
          width: "300px",
          marginTop: 20,
          borderRadius: 10
        }}
      />

      <button
        onClick={() => router.push("/book")}
        style={{
          marginTop: 30,
          padding: "15px 40px",
          fontSize: 18,
          background: "#e50914",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        BOOK NOW
      </button>

      <p style={{ marginTop: 15, fontSize: 12 }}>
        🍿 Snacks available for sale
      </p>
    </div>
  );
}
