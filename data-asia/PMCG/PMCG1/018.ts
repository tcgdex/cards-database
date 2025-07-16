import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Growlithe",
         ja: "うなり声",
         fr: "Grogner",
         de: "Knurren",
         es: "Gruñido",
         it: "Growlithe",
         pt: "Growlithe",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [58],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flare",
            ja: "フレア",
            fr: "Éclater",
            de: "Fackel",
            es: "Llamarada",
            it: "Bagliore",
            pt: "Flare",
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
