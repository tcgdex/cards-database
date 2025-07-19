import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Porygon",
         ja: "ポリゴン",
         fr: "Purygon",
         de: "Porygon",
         es: "Fisgón",
         it: "Porygon",
         pt: "Porygon",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [137],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sharpen",
            ja: "シャープ",
            fr: "Aiguiser",
            de: "Schärfen",
            es: "Afilar",
            it: "Affilare",
            pt: "Afiado",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
