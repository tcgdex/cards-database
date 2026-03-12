import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Armarouge",
  },
  suffix: "EX",
  illustrator: "takuyoa",
  rarity: "Four Diamond",
  category: "Pokemon",
  hp: 140,
  types: ["Fire"],
  evolveFrom: {
    en: "Charcadet",
  },
  stage: "Stage 1",
  abilities: [
    {
      type: "Ability",
      name: {
        en: "Armor",
      },
      effect: {
        en: "This Pokémon takes –30 damage from attacks.",
      },
    },
  ],
  attacks: [
    {
      name: {
        en: "Armor Cannon",
      },
      damage: "120",
      cost: ["Fire", "Colorless", "Colorless"],
      effect: {
        en: "Discard a Fire Energy from this Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Water",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;