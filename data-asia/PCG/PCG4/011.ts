import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Pineco",
         ja: "Pineco",
         fr: "Pignon",
         de: "Pineco",
         es: "Pineco",
         it: "Pineco",
         pt: "Pineco",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [204],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
