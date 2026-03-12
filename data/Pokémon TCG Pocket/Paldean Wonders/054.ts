import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Gimmighoul",
  },
  illustrator: "Mizue",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Psychic"],
  dexId: [999],
  description: {
    en: "It lives inside an old treasure chest. Sometimes it gets left in shop corners since no one realizes it’s actually a Pokémon.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Continuous Coin Toss",
      },
      damage: "20×",
      cost: ["Colorless"],
      effect: {
        en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;