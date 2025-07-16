import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "PlusPower",
         ja: "プラスパワー",
         fr: "Plus puissance",
         de: "Pluskraft",
         es: "Más potencia",
         it: "Piùpo",
         pt: "PlusPower",
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
