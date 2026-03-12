import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Wugtrio",
  },
  illustrator: "Kouki Saitou",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Water"],
  dexId: [961],
  evolveFrom: {
    en: "Wiglett",
  },
  description: {
    en: "A variety of fish Pokémon, Wugtrio was once considered to be a regional form of Dugtrio.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Triple Whip",
      },
      damage: "30×",
      cost: ["Water"],
      effect: {
        en: "Flip 3 coins. This attack does 30 damage for each heads.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;