import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Revavroom",
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 110,
  types: ["Metal"],
  dexId: [966],
  evolveFrom: {
    en: "Varoom",
  },
  description: {
    en: "Revavroom viciously threatens others with the sound of its exhaust. It sticks its tongue out from its cylindrical mouth and sprays toxic fluids.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Poison Gas",
      },
      damage: "50",
      cost: ["Metal", "Colorless"],
      effect: {
        en: "Your opponent's Active Pokémon is now Poisoned.",
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