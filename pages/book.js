import { useState } from "react";

const ROWS = 26; // A–Z
const SEATS_PER_ROW = 27;
const PRICE = 157;
const MAX_SELECTION = 6;

export default function Book() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = Array.from({ length: ROWS }, (_, i) =>
    Array.from(
      { length: SEATS_PER_ROW },
      (_, j) => `${String.fromCharCode(65 + i)}${j + 1}`
    )
  );

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length >= MAX_SELECTION) {
        alert("Maximum 6 seats allowed");
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getCurveOffset = (rowIndex) => {
    const center = Math.floor(ROWS / 2);
    return Math.abs(center - rowIndex) * 6;
  };

  return (
    <div className="wrapper">
      <h1>✏️ Select Your Seats</h1>
      <p className="price">
        ₹{PRICE} per seat | Max {MAX_SELECTION} seats
      </p>

      {/* SCREEN */}
      <div className="screen">
        <span>SCREEN THIS SIDE</span>
      </div>

      {/* SEATS */}
      <div className="seating">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="row"
            style={{
              marginBottom:
                rowIndex === 7 || rowIndex === 18 ? "45px" : "8px",
              transform: `translateX(${getCurveOffset(rowIndex)}px)`
            }}
          >
            {row.map((seat) => (
              <button
                key={seat}
                className={`seat ${
                  selectedSeats.includes(seat) ? "selected" : ""
                }`}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="summary">
        <p>Selected: {selectedSeats.join(", ") || "None"}</p>
        <h2>Total: ₹{selectedSeats.length * PRICE}</h2>
        <button className="payBtn">Pay Now</button>
      </div>

      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          background: black;
          color: white;
          text-align: center;
          padding: 20px;
        }

        h1 {
          margin-bottom: 5px;
        }

        .price {
          color: #ccc;
          margin-bottom: 15px;
        }

        .screen {
          width: 70%;
          margin: 0 auto 25px;
          padding: 10px;
          background: #222;
          border-radius: 0 0 40px 40px;
          transform: perspective(300px) rotateX(-8deg);
        }

        .screen span {
          font-size: 14px;
          letter-spacing: 2px;
          color: #aaa;
        }

        .seating {
          overflow-x: auto;
          padding-bottom: 20px;
        }

        .row {
          display: flex;
          justify-content: center;
        }

        .seat {
          width: 38px;
          height: 32px;
          margin: 3px;
          font-size: 10px;
          background: #444;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .seat:hover {
          background: #666;
        }

        .seat.selected {
          background: red;
        }

        .summary {
          margin-top: 25px;
        }

        .payBtn {
          margin-top: 10px;
          padding: 12px 40px;
          font-size: 16px;
          background: red;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }

        .payBtn:hover {
          background: darkred;
        }

        @media (max-width: 768px) {
          .seat {
            width: 32px;
            height: 28px;
            font-size: 9px;
          }

          .screen {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}
