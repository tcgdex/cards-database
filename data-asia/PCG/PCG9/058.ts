import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ニドラン（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [Unknown],
      hp: 40,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "テールホイップ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。",
                                                                      },
        },
        {
          cost: ["Colorless"],
          name: {
                        ja: "傷",
                                                                      },
          damage: 10,
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
