import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Dachsbun",
  },
  illustrator: "You Iribi",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Psychic"],
  dexId: [927],
  evolveFrom: {
    en: "Fidough",
  },
  description: {
    en: "The pleasant aroma that emanates from this Pokémon's body helps wheat grow, so Dachsbun has been treasured by farming villages.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Play Rough",
      },
      damage: "50+",
      cost: ["Psychic", "Psychic"],
      effect: {
        en: "Flip a coin. If heads, this attack does 50 more damage.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;