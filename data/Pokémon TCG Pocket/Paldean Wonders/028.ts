import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Palafin",
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 130,
  types: ["Water"],
  dexId: [964],
  evolveFrom: {
    en: "Finizen",
  },
  description: {
    en: "This hero of the ocean swims at a speed of 50 knots and saves drowning people and Pokémon.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Jet Punch",
      },
      damage: 50,
      cost: ["Water", "Water", "Water"],
      effect: {
        en: "This attack also does 50 damage to 1 of your opponent's Benched Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;