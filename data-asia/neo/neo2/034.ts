import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Larvitar",
         ja: "幼虫",
         fr: "Larvi",
         de: "Larvitar",
         es: "Larvito",
         it: "Larvitar",
         pt: "Larvitar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [246],
      hp: 40,
      types: ["Fighting"],
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
