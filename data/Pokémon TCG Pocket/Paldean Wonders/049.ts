import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Rabsca",
  },
  illustrator: "Oswaldo KATO",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Psychic"],
  dexId: [954],
  evolveFrom: {
    en: "Rellor",
  },
  description: {
    en: "An infant sleeps inside the ball. Rabsca rolls the ball soothingly with its legs to ensure the infant sleeps comfortably.",
  },
  stage: "Stage 1",
  attacks: [
    {n      name: {
        en: "Psybeam",
      },
      damage: "80",
      cost: ["Psychic", "Psychic"],
      effect: {
        en: "Your opponent's Active Pokémon is now Confused.",
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