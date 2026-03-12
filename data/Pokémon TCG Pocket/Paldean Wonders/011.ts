import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Brambleghast",
  },
  illustrator: "KEIICHIRO ITO",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [947],
  evolveFrom: {
    en: "Bramblin",
  },
  description: {
    en: "Brambleghast wanders around arid regions. On rare occasions, mass outbreaks of these Pokémon will bury an entire town.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Continuous Tumble",
      },
      damage: "60×",
      cost: ["Grass", "Colorless"],
      effect: {
        en: "Flip a coin until you get tails. This attack does 60 damage for each heads.",
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