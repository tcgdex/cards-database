import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Imposter Professor Oak",
         ja: "詐欺師オーク教授",
         fr: "Professeur d'imposteur Oak",
         de: "Imposter Professor Oak",
         es: "Profesor de impostor de roble",
         it: "Professor Imposter Oak",
         pt: "Professor Impostor Oak",
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
