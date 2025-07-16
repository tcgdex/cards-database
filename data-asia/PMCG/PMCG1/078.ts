import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Revive",
         ja: "復活します",
         fr: "Relancer",
         de: "Beleben",
         es: "Reanimar",
         it: "RIVENDI",
         pt: "Reviver",
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
