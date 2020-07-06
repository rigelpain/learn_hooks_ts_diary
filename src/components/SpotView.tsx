import React from "react";
import { Spot } from "../types";

const SpotView: React.FC<{ spot: Spot }> = ({ spot }) => {
  return (
    <>
      <article>
        現在の場所 : <div>{spot.name}</div>
        <img src={spot.photo} alt={`${spot.name}の画像`} />
        <section>{spot.paragraph}</section>
      </article>
    </>
  );
};

export default SpotView;
