import React, { useEffect, useRef } from 'react';
import "./TitleCarts.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCarts = ({title,category}) => {
  const cardsRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className='titlecarts'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCarts;
