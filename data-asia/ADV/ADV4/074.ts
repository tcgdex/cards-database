import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Steven's Advice",
         ja: "スティーブンのアドバイス",
         fr: "Les conseils de Steven",
         de: "Stevens Rat",
         es: "Consejo de Steven",
         it: "Il consiglio di Steven",
         pt: "O conselho de Steven",
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
          stamp: ["1st edition"],
        },
      ],
};
