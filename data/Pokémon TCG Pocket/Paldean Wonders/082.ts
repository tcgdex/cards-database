import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Maushold",
  },
  illustrator: "Saya Tsuruta",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Colorless"],
  dexId: [925],
  evolveFrom: {
    en: "Tandemaus",
  },
  description: {
    en: "The little one just appeared one day. They all live together like a family, but the relationship between the three is still unclear.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Triple Gnawing",
      },
      damage: "60",
      cost: ["Colorless", "Colorless"],
      effect: {
        en: "Flip 3 coins. For each heads, discard a random Energy from your opponent's Active Pokémon.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;