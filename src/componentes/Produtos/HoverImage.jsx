import { useState } from "react";

export default function HoverImage({ cover, inside }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ width: "250px", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? inside : cover}
        alt="Product"
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}
