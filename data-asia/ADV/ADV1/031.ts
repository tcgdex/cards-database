import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ファンピー",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [231],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "スタンピード",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "トレマラー",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は各防御ポケモンに10ダメージを与え、防御する各ポケモンが麻痺しています。",
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
