import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Energy Retrieval",
         ja: "エネルギー検索",
         fr: "Récupération d'énergie",
         de: "Energieabzug",
         es: "Recuperación de energía",
         it: "Recupero energetico",
         pt: "Recuperação de energia",
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
