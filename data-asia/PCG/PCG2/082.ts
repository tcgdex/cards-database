import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Boost Energy",
         ja: "エネルギーを高めます",
         fr: "Stimuler l'énergie",
         de: "Energie steigern",
         es: "Aumentar la energía",
         it: "Aumenta l'energia",
         pt: "Aumentar a energia",
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
