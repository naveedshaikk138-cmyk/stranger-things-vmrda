import { useState } from "react";
import { useRouter } from "next/router";

const ROWS = "ABCDEFGHIJKLMNOPQRST".split(""); // 20 rows
const SEATS = 30;
const PRICE = 157;
const MAX_SELECT = 6;

// vertical aisles after these seat numbers
const AISLE_AFTER = [8, 22];

export default function Book() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);

  const toggleSeat = (seat) => {
    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      if (selected.length >= MAX_SELECT) return;
      setSelected([...selected, seat]);
    }
  };

  const proceed = () => {
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

      <div className="seat-wrapper">
        {ROWS.map((row, rowIndex) => {
          // curve effect: middle rows slightly lower
          const curveOffset = Math.abs(ROWS.length / 2 - rowIndex) * 3;

          return (
            <div
              key={row}
              className="row"
              style={{ marginLeft: curveOffset }}
            >
              {Array.from({ length: SEATS }).map((_, i) => {
                const seatNo = i + 1;
                const seatId = `${row}${seatNo}`;
                const isSelected = selected.includes(seatId);

                return (
                  <div key={seatId} className="seat-container">
                    <button
                      className={`seat ${isSelected ? "selected" : ""}`}
                      onClick={() => toggleSeat(seatId)}
                    >
                      {seatId}
                    </button>

                    {AISLE_AFTER.includes(seatNo) && (
                      <div className="v-aisle" />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="footer">
        <div>
          <strong>Selected:</strong>{" "}
          {selected.length ? selected.join(", ") : "None"}
        </div>
        <div>
          <strong>Total:</strong> ₹{selected.length * PRICE}
        </div>

        <button className="pay" onClick={proceed}>
          Pay Now
        </button>
      </div>

      <style jsx>{`
        .page {
          background: black;
          color: white;
          min-height: 100vh;
          padding: 16px;
        }

        h1 {
          margin-bottom: 10px;
        }

        .seat-wrapper {
          overflow: auto;
          max-height: 65vh;
          padding-bottom: 20px;
        }

        .row {
          display: flex;
          margin-bottom: 8px;
        }

        .seat-container {
          display: flex;
          align-items: center;
        }

        .seat {
          width: 38px;
          height: 32px;
          margin: 2px;
          font-size: 10px;
          background: #333;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .seat.selected {
          background: #e50914;
        }

        .v-aisle {
          width: 20px;
        }

        .footer {
          position: sticky;
          bottom: 0;
          background: black;
          padding: 12px;
          border-top: 1px solid #222;
        }

        .pay {
          margin-top: 10px;
          width: 100%;
          padding: 14px;
          background: #e50914;
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
