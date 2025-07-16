import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Voltorb",
         ja: "Voltorb",
         fr: "Voltorbe",
         de: "Voltorb",
         es: "Voltorbo",
         it: "Voltorb",
         pt: "Voltorb",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [100],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
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
