import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Mysterious Fossil",
         ja: "神秘的な化石",
         fr: "Fossile mystérieux",
         de: "Geheimnisvolles Fossil",
         es: "Fósil misterioso",
         it: "Misteriosi fossili",
         pt: "Fóssil misterioso",
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
          stamp: ["1st edition"],
        },
      ],
};
