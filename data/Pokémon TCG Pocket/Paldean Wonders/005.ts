import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Spidops",
  },
  illustrator: "Anesaki Dynamic",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Grass"],
  dexId: [918],
  evolveFrom: {
    en: "Tarountula",
  },
  description: {
    en: "Spidops covers its territory in tough, sticky threads to set up traps for intruders.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Bind Down",
      },
      damage: "40",
      cost: ["Grass"],
      effect: {
        en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
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