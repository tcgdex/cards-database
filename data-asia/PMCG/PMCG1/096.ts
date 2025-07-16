import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Double Colorless Energy",
         ja: "二重の無色のエネルギー",
         fr: "Double énergie incolore",
         de: "Doppelte farblose Energie",
         es: "Doble energía incolora",
         it: "Doppia energia incolore",
         pt: "Energia incolor dupla",
      },

      rarity: "Uncommon",
      category: "Energy",

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
