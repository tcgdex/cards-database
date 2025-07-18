import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Heal Energy",
         ja: "エネルギーを癒します",
         fr: "Guérir",
         de: "Energie heilen",
         es: "Sanar energía",
         it: "Guarire energia",
         pt: "Cura energia",
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
