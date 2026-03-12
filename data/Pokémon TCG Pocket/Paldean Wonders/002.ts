import { Card } from "../../../interfaces";
import Set from "../PaldeanWonders";

const card: Card = {
  set: Set,
  name: {
    en: "Floragato",
  },
  illustrator: "Kouki Saitou",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Grass"],
  dexId: [907],
  evolveFrom: {
    en: "Sprigatito",
  },
  description: {
    en: "The hardness of Floragato's fur depends on the Pokémon's mood. When Floragato is prepared to battle, its fur becomes pointed and needle sharp.",
  },
  stage: "Stage 1",
  attacks: [
    {
      name: {
        en: "Leaf Step",
      },
      damage: 30,
      cost: ["Grass"],
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