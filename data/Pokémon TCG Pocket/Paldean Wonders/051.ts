import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Espathra",
  },
  illustrator: "Sanosuke Sakuma",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Psychic"],
  dexId: [956],
  evolveFrom: {
    en: "Flittle",
  },
  description: {
    en: "It emits psychic power from the gaps between its multicolored frills and sprints at speeds greater than 120 mph.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Psychic",
      },
      damage: "30+",
      cost: ["Psychic"],
      effect: {
        en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
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
