import { useState } from "react";

const ROWS = 20; // A to T
const SEATS_PER_ROW = 30;
const PRICE = 157;
const MAX_SEATS = 6;

// Vertical aisles after these seat numbers
const AISLE_AFTER = [8, 22];

export default function Book() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      return;
    }

    if (selectedSeats.length >= MAX_SEATS) {
      alert("Maximum 6 seats allowed");
      return;
    }

    setSelectedSeats([...selectedSeats, seat]);
  };

  const handlePay = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    localStorage.setItem(
      "booking",
      JSON.stringify({
        seats: selectedSeats,
        total: selectedSeats.length * PRICE,
      })
    );

    window.location.href = "/payment";
  };

  return (
    <div className="page">
      <h1>Select Your Seats</h1>
      <p className="price">₹{PRICE} per seat • Max {MAX_SEATS} seats</p>

      {/* SCREEN */}
      <div className="screen">SCREEN THIS SIDE</div>

      {/* SCROLLABLE SEAT AREA */}
      <div className="seatViewport">
        <div className="seating">
          {Array.from({ length: ROWS }).map((_, rowIndex) => {
            const rowLetter = String.fromCharCode(65 + rowIndex);

            return (
              <div className="row" key={rowLetter}>
                {Array.from({ length: SEATS_PER_ROW }).map((_, seatIndex) => {
                  const seatNumber = seatIndex + 1;
                  const seatId = `${rowLetter}${seatNumber}`;

                  return (
                    <div className="seatWrapper" key={seatId}>
                      <button
                        className={`seat ${
                          selectedSeats.includes(seatId) ? "selected" : ""
                        }`}
                        onClick={() => toggleSeat(seatId)}
                      >
                        {seatId}
                      </button>

                      {AISLE_AFTER.includes(seatNumber) && (
                        <div className="aisle" />
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
        <p>
          Selected:{" "}
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "None"}
        </p>
        <h2>Total: ₹{selectedSeats.length * PRICE}</h2>
        <button className="payBtn" onClick={handlePay}>
          Pay Now
        </button>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: black;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
        }

        h1 {
          margin-top: 10px;
        }

        .price {
          color: #bbb;
          margin-bottom: 10px;
        }

        .screen {
          width: 90%;
          max-width: 700px;
          margin-bottom: 10px;
          padding: 8px;
          background: #222;
          text-align: center;
          border-radius: 0 0 40px 40px;
          font-size: 12px;
          letter-spacing: 2px;
          color: #aaa;
        }

        /* 🔑 SCROLL FIX */
        .seatViewport {
          flex: 1;
          width: 100%;
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
          width: 36px;
          height: 30px;
          margin: 3px;
          font-size: 9px;
          background: #444;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .seat.selected {
          background: red;
        }

        .aisle {
          width: 26px;
        }

        .summary {
          padding: 10px 0;
          text-align: center;
        }

        .payBtn {
          margin-top: 8px;
          padding: 12px 36px;
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

        /* 📱 MOBILE TWEAKS */
        @media (max-width: 768px) {
          .seat {
            width: 32px;
            height: 28px;
            font-size: 8px;
          }

          .aisle {
            width: 22px;
          }
        }
      `}</style>
    </div>
  );
}
