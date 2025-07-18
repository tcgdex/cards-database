import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "New Pokedex",
         ja: "新しいpokedex",
         fr: "Nouveau pokedex",
         de: "Neue Pokedex",
         es: "Nuevo Pokedex",
         it: "Nuovo Pokedex",
         pt: "Novo Pokedex",
      },

      rarity: "Common",
      category: "Trainer",

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
