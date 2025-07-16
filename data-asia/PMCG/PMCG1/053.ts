import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Machop",
         ja: "マチョップ",
         fr: "Machop",
         de: "Machop",
         es: "Machop",
         it: "Machop",
         pt: "Machop",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [66],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Low Kick",
            ja: "ローキック",
            fr: "Coup de pied bas",
            de: "Niedriger Kick",
            es: "Patada baja",
            it: "Calcio basso",
            pt: "Kick baixo",
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
