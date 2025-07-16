import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefairy Doll",
         ja: "Clefairy Doll",
         fr: "Poupée clefairy",
         de: "Clefairy -Puppe",
         es: "Muñeca clefairy",
         it: "Bambola clefairy",
         pt: "Boneca Clefairy",
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
