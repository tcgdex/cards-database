import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Houndour",
         ja: "猟犬",
         fr: "Chouchou",
         de: "Houndour",
         es: "Acosar",
         it: "Houndour",
         pt: "Houndour",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [228],
      hp: 50,
      types: ["Darkness"],
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
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
