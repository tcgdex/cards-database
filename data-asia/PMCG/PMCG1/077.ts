import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Professor Oak",
         ja: "オーク教授",
         fr: "Professeur Oak",
         de: "Professor Oak",
         es: "Profesor de roble",
         it: "Professor Oak",
         pt: "Professor Oak",
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
