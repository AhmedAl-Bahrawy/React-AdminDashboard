import React, { useState } from "react";
import "./Cards.css";
import { CardsData } from "../../Data/Data";
import Card from "./Card";

const Cards = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCardId(id === expandedCardId ? null : id);
  };

  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div
            className="parentContainer"
            key={id}
            onClick={() => handleCardClick(card.id)}
          >
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              key={id}
              id={card.id}
              isExpanded={expandedCardId === card.id}
              onCardClick={handleCardClick}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
