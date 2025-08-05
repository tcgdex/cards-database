import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "lotad",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [270],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "アクアリフト",
                                                                      },
          effect: {
                        ja: "Lotadに水エネルギーが付着している場合、Lotadのリトリートコストは0です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ローリングタックル",
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
