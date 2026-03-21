import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Oinkologne",
    fr: "Fragroin"
  },
  illustrator: "Pani Kobayashi",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 110,
  types: ["Colorless"],
  dexId: [916],
  evolveFrom: {
    en: "Lechonk",
    fr: "Gourmelet"
  },
  description: {
    en: "It entrances female Pokémon with the sweet, alluring scent that wafts from all over its body.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Leg Stomp",
      },
      damage: "100",
      cost: ["Colorless", "Colorless", "Colorless"],
      effect: {
        en: "Flip a coin. If tails, during your next turn, this Pokémon can't attack.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;