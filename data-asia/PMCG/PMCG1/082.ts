import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pokdex",
         ja: "pokedex",
         fr: "Pokedex",
         de: "Pokedex",
         es: "Pokedex",
         it: "Pokedex",
         pt: "Pokedex",
      },

      rarity: "Uncommon",
      category: "Trainer",

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
