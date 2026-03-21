import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Cyclizar",
    fr: "Motorizard"
  },
  illustrator: "AKIRA EGAWA",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Colorless"],
  dexId: [967],
  description: {
    en: "It can sprint at over 70 mph while carrying a human. The rider's body heat warms Cyclizar's back and lifts the Pokémon's spirit.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Driving Buddy",
      },
      damage: "40+",
      cost: ["Colorless", "Colorless", "Colorless"],
      effect: {
        en: "If you played a Supporter card from your hand during this turn, this attack does 60 more damage.",
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
