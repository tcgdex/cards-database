import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "アブラ",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [63],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "サイコフロー",
          },
          effect: {
            ja: "ABRAに精神的エネルギーカードが付いている限り、そのリトリートコストは0です。",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            ja: "ヘッドバット",
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
          stamp: ["1st edition"],
        },
      ],
};
