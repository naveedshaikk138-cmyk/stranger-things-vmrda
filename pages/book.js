import { useState } from "react";

const TOTAL_ROWS = 20; // A–T
const SEATS_PER_ROW = 30;
const PRICE = 157;
const MAX_SELECTION = 6;

// Vertical aisles AFTER these seat numbers (1-based)
const AISLE_AFTER_SEATS = [8, 19];

export default function Book() {
  const [selectedSeats, setSelectedSeats] = useState([]);

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

  return (
    <div className="wrapper">
      <h1>🎟 Select Your Seats</h1>
      <p className="price">₹{PRICE} per seat | Max {MAX_SELECTION} seats</p>

      {/* SCREEN */}
      <div className="screen">SCREEN THIS SIDE</div>

      {/* SEATING */}
      <div className="seating">
        {Array.from({ length: TOTAL_ROWS }).map((_, rowIndex) => {
          const rowLabel = String.fromCharCode(65 + rowIndex);

          return (
            <div className="row" key={rowLabel}>
              {Array.from({ length: SEATS_PER_ROW }).map((_, seatIndex) => {
                const seatNumber = seatIndex + 1;
                const seat = `${rowLabel}${seatNumber}`;

                return (
                  <div key={seat} className="seatWrapper">
                    <button
                      className={`seat ${
                        selectedSeats.includes(seat) ? "selected" : ""
                      }`}
                      onClick={() => toggleSeat(seat)}
                    >
                      {seat}
                    </button>

                    {/* VERTICAL AISLE */}
                    {AISLE_AFTER_SEATS.includes(seatNumber) && (
                      <div className="aisle-vertical" />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
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

        .price {
          color: #bbb;
          margin-bottom: 15px;
        }

        .screen {
          width: 85%;
          margin: 0 auto 35px;
          padding: 12px;
          background: #222;
          border-radius: 0 0 60px 60px;
          transform: perspective(400px) rotateX(-10deg);
          font-size: 13px;
          letter-spacing: 2px;
          color: #aaa;
        }

        .seating {
          overflow-x: auto;
          padding-bottom: 30px;
        }

        .row {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
        }

        .seatWrapper {
          display: flex;
          align-items: center;
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

        .aisle-vertical {
          width: 30px; /* WALKING SPACE */
        }

        .summary {
          margin-top: 30px;
        }

        .payBtn {
          margin-top: 12px;
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
          .aisle-vertical {
            width: 22px;
          }
          .screen {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
}
