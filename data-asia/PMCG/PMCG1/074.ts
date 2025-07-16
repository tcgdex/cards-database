import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Bill",
         ja: "請求書",
         fr: "Facture",
         de: "Rechnung",
         es: "Factura",
         it: "Conto",
         pt: "Conta",
      },

      rarity: "Common",
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
