import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Scovillain",
  },
  illustrator: "kodama",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [952],
  evolveFrom: {
    en: "Capsakid",
  },
  description: {
    en: "The green head has turned vicious due to the spicy chemicals stimulating its brain. Once it goes on a rampage, there is no stopping it.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Red-Hot Headbutt",
      },
      damage: "60+",
      cost: ["Grass", "Colorless"],
      effect: {
        en: "If your opponent's Active Pokémon is a Grass or Metal Pokémon, this attack does 40 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
