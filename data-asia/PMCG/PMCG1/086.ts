import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Devolution Spray",
         ja: "デボルブスプレー",
         fr: "Pulvérisation",
         de: "Devolution Spray",
         es: "Devolución de aerosol",
         it: "Spray di devoluzione",
         pt: "Spray de devolução",
      },

      rarity: "Rare",
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
