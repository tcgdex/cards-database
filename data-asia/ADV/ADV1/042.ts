import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "vigoroth",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [288],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "フューリースワイプ",
                                                                      },
          effect: {
                        ja: "3コインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "怒り",
                                                                      },
          effect: {
                        ja: "vigorothのダメージカウンターごとに20のダメージと10のダメージがさらに10件のダメージを与えます。",
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
          stamp: ["1st edition"],
        },
      ],
};
