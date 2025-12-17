import { useState } from "react";

export default function Home() {
  const rows = 17;
  const cols = 27;
  const price = 157;
  const maxSeats = 6;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length >= maxSeats) {
        alert("Maximum 6 seats allowed per booking");
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>🎬 Stranger Things Finale Screening</h1>
      <p style={{ textAlign: "center" }}>
        VMRDA Children’s Arena | 10 AM – 1 PM | ₹157 per seat
      </p>

      <p style={{ textAl
