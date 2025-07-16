import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Rattata",
         ja: "ラッタタ",
         fr: "Rattata",
         de: "Rattata",
         es: "Rattata",
         it: "Rattata",
         pt: "Rattata",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [19],
      hp: 30,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 20,
        },
      ],


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
