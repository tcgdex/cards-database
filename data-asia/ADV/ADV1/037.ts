import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ジグザグーン",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [263],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "フューリースワイプ",
                                                                      },
          effect: {
                        ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
