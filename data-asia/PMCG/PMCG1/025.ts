import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Staryu",
         ja: "staryu",
         fr: "Staryu",
         de: "Staryu",
         es: "Staryu",
         it: "Staryu",
         pt: "Staryu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [120],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Slap",
            ja: "平手打ち",
            fr: "Gifler",
            de: "Schlagen",
            es: "Bofetada",
            it: "Schiaffo",
            pt: "Tapa",
          },
          damage: 20,
        },
      ],

      retreat: 1,

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
