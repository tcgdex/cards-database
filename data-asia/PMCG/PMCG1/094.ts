import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Pokmon Breeder",
         ja: "ポケモンブリーダー",
         fr: "Éleveur de pokémons",
         de: "Pokemon -Züchter",
         es: "Criador de pokemon",
         it: "Breeder Pokemon",
         pt: "Criador de Pokémon",
      },

      rarity: "Rare",
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
