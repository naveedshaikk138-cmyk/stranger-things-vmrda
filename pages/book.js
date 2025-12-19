import { useState } from "react";
import { useRouter } from "next/router";

const ROWS = "ABCDEFGHIJKLMNOPQRST".split("");
const SEATS = 30;
const PRICE = 157;

export default function Book() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      if (selected.length >= 6) return;
      setSelected([...selected, seat]);
    }
  };

  const proceedToPayment = () => {
    if (selected.length === 0) return;

    localStorage.setItem(
      "booking",
      JSON.stringify({
        seats: selected,
        total: selected.length * PRICE,
      })
    );

    router.push("/payment");
  };

  return (
    <div className="page">
      <h1>Select Your Seats</h1>

      <div className="seats">
        {ROWS.map((row) => (
          <div className="row" key={row}>
            {Array.from({ length: SEATS }).map((_, i) => {
              const seat = `${row}${i + 1}`;
              const isSelected = selected.includes(seat);
              return (
                <button
                  key={seat}
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSeat(seat)}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="footer">
        <p>Selected: {selected.join(", ") || "None"}</p>
        <p>Total: ₹{selected.length * PRICE}</p>

        <button
          className="pay"
          disabled={selected.length === 0}
          onClick={proceedToPayment}
        >
          Pay Now
        </button>
      </div>

      <style jsx>{`
        .page {
          background: black;
          color: white;
          min-height: 100vh;
          padding: 20px;
        }
        .seats {
          overflow: auto;
          max-height: 65vh;
        }
        .row {
          display: flex;
          margin-bottom: 8px;
        }
        .seat {
          margin: 2px;
          padding: 6px;
          font-size: 10px;
          background: #333;
          color: white;
          border: none;
          border-radius: 4px;
        }
        .seat.selected {
          background: #e50914;
        }
        .footer {
          position: sticky;
          bottom: 0;
          background: black;
          padding: 10px;
        }
        .pay {
          width: 100%;
          padding: 14px;
          background: #e50914;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
