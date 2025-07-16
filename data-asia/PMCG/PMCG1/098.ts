import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Fire Energy",
         ja: "火エネルギー",
         fr: "Énergie de feu",
         de: "Feuerenergie",
         es: "Energía de fuego",
         it: "Energia di fuoco",
         pt: "Energia de incêndio",
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
