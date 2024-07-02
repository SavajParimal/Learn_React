import React, { useState } from "react";

export default function Form({ hansleItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newValue = { id: Date.now(), description, quantity, packed: false };
    console.log(newValue);

    setDescription("");
    setQuantity(1);
    hansleItems(newValue);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What did you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
