import {Card} from "../../../interfaces"
import Set from "../VS1"

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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
