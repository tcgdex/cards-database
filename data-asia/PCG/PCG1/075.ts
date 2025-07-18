import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Great Ball",
         ja: "素晴らしいボール",
         fr: "Grande balle",
         de: "Toller Ball",
         es: "Gran bola",
         it: "Ottima palla",
         pt: "Ótima bola",
      },

      rarity: "Uncommon",
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
