import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Paldean Clodsire",
  },
  illustrator: "Shin Nagasawa",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Darkness"],
  dexId: 980,
  evolveFrom: {
    en: "Paldean Wooper",
  },
  description: {
    en: "It lives at the bottom of ponds and swamps. It will carry Wooper on its back and ferry them across water from one shore to the other.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Muddy Hammer",
      },
      damage: 70,
      cost: ["Darkness", "Darkness", "Colorless"],
      effect: {
        en: "Discard the top card of your opponent's deck.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 3,
};

export default card;