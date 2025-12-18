import { useState } from "react";

const TOTAL_ROWS = 20; // A–T
const SEATS_PER_ROW = 30;
const PRICE = 157;
const MAX_SELECTION = 6;

// Vertical aisles AFTER these seat numbers
const AISLE_AFTER_SEATS = [8, 22];

export default function Book() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== s || s !== seat));
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

      {/* SCROLLABLE SEATING AREA */}
      <div className="seatViewport">
        <div className="seating">
          {Array.from({ length: TOTAL_ROWS }).map((_, rowIndex) => {
            const rowLabel = String.fromCharCode(65 + rowIndex);

            return (
              <div className="row" key={rowLabel}>
                {Array.from({ length: SEATS_PER_ROW }).map((_, seatIndex) => {
                  const seatNumber = seatIndex + 1;
                  const seat = `${rowLabel}${seatNumber}`;

                  return (
                    <div className="seatWrapper" key={seat}>
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
          padding: 12px;
          display: flex;
          flex-direction: column;
        }

        .price {
          color: #bbb;
          margin-bottom: 10px;
        }

        .screen {
          width: 90%;
          margin: 0 auto 12px;
          padding: 10px;
          background: #222;
          border-radius: 0 0 50px 50px;
          transform: perspective(400px) rotateX(-10deg);
          font-size: 12px;
          letter-spacing: 2px;
          color: #aaa;
        }

        /* 🔑 KEY FIX */
        .seatViewport {
          flex: 1;
          overflow-x: auto;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          border-top: 1px solid #111;
          border-bottom: 1px solid #111;
        }

        .seating {
          min-width: max-content;
          padding: 10px 0;
        }

        .row {
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          min-width: max-content;
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

        .seat.selected {
          background: red;
        }

        .aisle-vertical {
          width: 28px;
        }

        .summary {
          padding: 12px 0;
        }

        .payBtn {
          margin-top: 8px;
          padding: 12px 40px;
          font-size: 16px;
          background: red;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
        }

        /* 📱 MOBILE OPTIMIZATION */
        @media (max-width: 768px) {
          .seat {
            width: 32px;
            height: 28px;
            font-size: 9px;
          }

          .aisle-vertical {
            width: 22px;
          }
        }
      `}</style>
    </div>
  );
}
