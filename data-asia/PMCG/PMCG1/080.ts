import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Full Heal",
         ja: "フルヒール",
         fr: "Guérison complète",
         de: "Volle Heilung",
         es: "Curada completa",
         it: "Guarigione piena",
         pt: "Cura completa",
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
