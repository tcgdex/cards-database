import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Greavard",
    fr: "Toutombe"
  },
  illustrator: "yuu",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Psychic"],
  dexId: [971],
  description: {
    en: "This friendly Pokémon doesn't like being alone. Pay it even the slightest bit of attention, and it will follow you forever.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Soul Shot",
      },
      damage: 30,
      cost: ["Psychic"],
      effect: {
        en: "Discard a card from your hand. If you can't, this attack does nothing.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Darkness",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;