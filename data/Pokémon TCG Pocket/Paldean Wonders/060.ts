import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Toedscruel",
    fr: "Terracruel"
  },
  illustrator: "Kouki Saitou",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Fighting"],
  dexId: [949],
  evolveFrom: {
    en: "Toedscool",
    fr: "Terracool"
  },
  description: {
    en: "It coils its 10 tentacles around prey and sucks out their nutrients, causing the prey pain. The folds along the rim of its head are a popular delicacy.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Stun Spore",
      },
      damage: "70",
      cost: ["Fighting", "Fighting", "Colorless"],
      effect: {
        en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;