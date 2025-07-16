import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Switch",
         ja: "スイッチ",
         fr: "Changer",
         de: "Schalten",
         es: "Cambiar",
         it: "Interruttore",
         pt: "Trocar",
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
