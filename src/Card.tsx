import React from "react";
import './Card.css';
import cardBack from "./card_back.jpg"

// const card = {
//   name: "Acidic Slime",
//   mana_cost: "{3}{G}{G}",
//   type_line: "Creature — Ooze",
//   oracle_text:
//     "Deathtouch (Any amount of damage this deals to a creature is enough to destroy it.)\nWhen Acidic Slime enters the battlefield, destroy target artifact, enchantment, or land.",
//   power: "2",
//   toughness: "2",
//   normal_image_uri:
//     "https://img.scryfall.com/cards/normal/front/a/b/abd6f5d1-7421-47f6-9e95-70372a365716.jpg?1541179766"
// };

export type card = {
  mana_cost: string;
  name: string;
  normal_image_uri: string;
  oracle_text: string;
  power?: string;
  toughness?: string;
  type_line: string;
}

export type CardProps = {
  card: card;
}

export function CardBack() {
  return <img src={cardBack} alt="Back of MTG card" className="Card" />
}

export default function Card({ card }: CardProps) {
  return <img src={card.normal_image_uri} alt={card.oracle_text} className="Card"  />
}
