import React, { useState } from "react";

function SeatBooking({ movie, onBook }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Deselect
        : [...prev, index] // Select
    );
  };

  const handleBook = () => {
    onBook(movie.id, selectedSeats);
    setSelectedSeats([]);
  };

  return (
    <div>
      <h2>Book Seats for {movie.title}</h2>
      <div className="seat-grid">
        {movie.seats.map((seat, i) => (
          <div
            key={i}
            className={`seat ${seat ? "booked" : "available"} ${
              selectedSeats.includes(i) ? "selected" : ""
            }`}
            onClick={() => !seat && toggleSeat(i)}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <button onClick={handleBook} disabled={selectedSeats.length === 0}>
        Book {selectedSeats.length} Seats
      </button>
    </div>
  );
}

export default SeatBooking;