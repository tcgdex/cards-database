import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Potion",
         ja: "ポーション",
         fr: "Potion",
         de: "Trank",
         es: "Poción",
         it: "Pozione",
         pt: "Poção",
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
