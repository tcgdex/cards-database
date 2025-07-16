import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Fighting Energy",
         ja: "エネルギーとの戦い",
         fr: "Énergie de combat",
         de: "Kämpfe Energie",
         es: "Energía de combate",
         it: "Combattere l'energia",
         pt: "Combate à energia",
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
