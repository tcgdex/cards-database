import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Primeape",
  },
  illustrator: "Shin Nagasawa",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 80,
  types: ["Fighting"],
  dexId: [57],
  evolveFrom: {
    en: "Mankey",
  },
  description: {
    en: "Some researchers theorize that Primeape remains angry even when inside a Poké Ball.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Rage",
      },
      damage: "30+",
      cost: ["Fighting"],
      effect: {
        en: "This attack does more damage equal to the damage this Pokémon has on it.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Psychic",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;