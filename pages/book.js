import { useEffect, useState } from "react";

export default function Book() {
  const rows = 17;
  const cols = 27;
  const price = 157;
  const maxSeats = 6;

  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length >= maxSeats) {
        alert("Maximum 6 seats allowed");
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const payNow = () => {
    if (selectedSeats.length === 0) {
      alert("Select at least one seat");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: selectedSeats.length * price * 100,
      currency: "INR",
      name: "Stranger Things Finale Screening",
      description: "VMRDA Children's Arena",
      handler: function (response) {
        alert("Payment Successful\nPayment ID: " + response.razorpay_payment_id);
      },
      theme: { color: "#e50914" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>🎟 Select Your Seats</h1>
      <p style={{ textAlign: "center" }}>₹157 per seat | Max 6 seats</p>

      <p style={{ textAlign: "center", marginTop: 20 }}>🎥 SCREEN THIS SIDE</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 6,
        marginTop: 20,
        overflowX: "auto"
      }}>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = String.fromCharCode(65 + Math.floor(i / cols));
          const num = (i % cols) + 1;
          const seat = `${row}${num}`;
          const selected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              onClick={() => toggleSeat(seat)}
              style={{
                padding: 8,
                fontSize: 11,
                background: selected ? "#e50914" : "#444",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: 30, textAlign: "center" }}>
        <p>Selected: {selectedSeats.join(", ") || "None"}</p>
        <h2>Total: ₹{selectedSeats.length * price}</h2>

        <button
          onClick={payNow}
          style={{
            marginTop: 15,
            padding: "12px 30px",
            fontSize: 16,
            background: "#e50914",
            color: "white",
            border: "none",
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
