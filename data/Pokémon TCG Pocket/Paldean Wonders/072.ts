import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Tinkatink",
    fr: "Forgerette"
  },
  illustrator: "Pani Kobayashi",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Metal"],
  dexId: [957],
  description: {
    en: "This Pokémon pounds iron scraps together to make a hammer. It will remake the hammer again and again until it's satisfied with the result.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Beat",
      },
      damage: "30",
      cost: ["Metal", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;