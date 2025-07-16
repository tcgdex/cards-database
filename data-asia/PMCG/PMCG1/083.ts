import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pokemon Center",
         ja: "ポケモンセンター",
         fr: "Centre de Pokémon",
         de: "Pokemon Center",
         es: "Centro de pokemon",
         it: "Pokemon Center",
         pt: "Pokemon Center",
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
