import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "電気",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [309],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "スニッフアウト",
                                                                      },
          effect: {
                        ja: "廃棄の山から1枚のカードを手に入れます。",
                                                                      },
        },
        {
          cost: ["Lightning"],
          name: {
                        ja: "素早い打撃",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
                                                                      },
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
