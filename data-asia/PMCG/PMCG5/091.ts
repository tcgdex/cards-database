import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Resistance Gym",
         ja: "レジスタンスジム",
         fr: "Gymnase de résistance",
         de: "Widerstands -Fitnessstudio",
         es: "Gimnasio",
         it: "Palestra di resistenza",
         pt: "Ginásio de resistência",
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
          stamp: ["1st edition"],
        },
      ],
};
