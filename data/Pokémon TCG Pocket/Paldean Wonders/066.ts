import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Lokix",
  },
  illustrator: "Souichirou Gunjima",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Darkness"],
  dexId: [920],
  evolveFrom: {
    en: "Nymble",
  },
  description: {
    en: "It uses its normally folded third set of legs when in Showdown Mode. This places a huge burden on its body, so it can't stay in this mode for long.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Rocket Jump",
      },
      damage: "80",
      cost: ["Darkness"],
      effect: {
        en: "Flip a coin. If tails, this attack does nothing.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;