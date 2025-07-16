import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Grass Energy",
         ja: "草のエネルギー",
         fr: "Énergie de l'herbe",
         de: "Grasergie",
         es: "Energía de hierba",
         it: "Energia di erba",
         pt: "Energia da grama",
      },

      rarity: "Common",
      category: "Energy",

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
