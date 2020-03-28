import React from "react";
import "./Card.css";
import cardBack from "./card_back.jpg";

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

const a = {
  object: "card",
  id: "b02422f7-728b-481b-9eb1-34d17c696ce6",
  oracle_id: "028bc726-0e86-4c53-9648-625153ae4b01",
  multiverse_ids: [83413],
  mtgo_id: 22469,
  mtgo_foil_id: 22470,
  tcgplayer_id: 12704,
  name: "Ivory Mask",
  lang: "en",
  released_at: "2005-07-29",
  uri: "https://api.scryfall.com/cards/b02422f7-728b-481b-9eb1-34d17c696ce6",
  scryfall_uri: "https://scryfall.com/card/9ed/23/ivory-mask?utm_source=api",
  layout: "normal",
  highres_image: true,
  image_uris: {
    small:
      "https://img.scryfall.com/cards/small/front/b/0/b02422f7-728b-481b-9eb1-34d17c696ce6.jpg?1562740262",
    normal:
      "https://img.scryfall.com/cards/normal/front/b/0/b02422f7-728b-481b-9eb1-34d17c696ce6.jpg?1562740262",
    large:
      "https://img.scryfall.com/cards/large/front/b/0/b02422f7-728b-481b-9eb1-34d17c696ce6.jpg?1562740262",
    png:
      "https://img.scryfall.com/cards/png/front/b/0/b02422f7-728b-481b-9eb1-34d17c696ce6.png?1562740262",
    art_crop:
      "https://img.scryfall.com/cards/art_crop/front/b/0/b02422f7-728b-481b-9eb1-34d17c696ce6.jpg?1562740262",
    border_crop:
      "https://img.scryfall.com/cards/border_crop/front/b/0/b02422f7-728b-481b-9eb1-34d17c696ce6.jpg?1562740262"
  },
  mana_cost: "{2}{W}{W}",
  cmc: 4.0,
  type_line: "Enchantment",
  oracle_text:
    "You have shroud. (You can't be the target of spells or abilities.)",
  colors: ["W"],
  color_identity: ["W"],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    historic: "not_legal",
    pioneer: "not_legal",
    modern: "legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "not_legal",
    commander: "legal",
    brawl: "not_legal",
    duel: "legal",
    oldschool: "not_legal"
  },
  games: ["paper", "mtgo"],
  reserved: false,
  foil: true,
  nonfoil: true,
  oversized: false,
  promo: false,
  reprint: true,
  variation: false,
  set: "9ed",
  set_name: "Ninth Edition",
  set_type: "core",
  set_uri: "https://api.scryfall.com/sets/e70c8572-4732-4e92-a140-b4e3c1c84c93",
  set_search_uri:
    "https://api.scryfall.com/cards/search?order=set\u0026q=e%3A9ed\u0026unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/9ed?utm_source=api",
  rulings_uri:
    "https://api.scryfall.com/cards/b02422f7-728b-481b-9eb1-34d17c696ce6/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A028bc726-0e86-4c53-9648-625153ae4b01\u0026unique=prints",
  collector_number: "23",
  digital: false,
  rarity: "rare",
  flavor_text:
    "Made from its wearer's hopes, the mask ensures that those hopes will be fulfilled.",
  card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
  artist: "Glen Angus",
  artist_ids: ["7be3b9e4-de9b-4a3d-884e-e67b9681d409"],
  illustration_id: "509ab253-31f7-4b59-8c9f-abc414b96620",
  border_color: "white",
  frame: "2003",
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 9073,
  related_uris: {
    gatherer:
      "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=83413",
    tcgplayer_decks:
      "https://decks.tcgplayer.com/magic/deck/search?contains=Ivory+Mask\u0026page=1\u0026partner=Scryfall\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Ivory+Mask",
    mtgtop8:
      "https://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Ivory+Mask"
  }
};

export type card = {
  mana_cost: string;
  name: string;
  normal_image_uri: string;
  oracle_text: string;
  power?: string;
  toughness?: string;
  type_line: string;
};

export type CardProps = {
  card: card;
};

export function CardBack() {
  return <img src={cardBack} alt="Back of MTG card" className="Card" />;
}

export default function Card({ card }: CardProps) {
  return (
    <img src={card.normal_image_uri} alt={card.oracle_text} className="Card" />
  );
}
