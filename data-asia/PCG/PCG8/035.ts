import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "spoink",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [325],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
                        ja: "Psywave",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンに取り付けられたエネルギーの量を10回ダメージします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ラム",
                                                                      },
          damage: 20,
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
