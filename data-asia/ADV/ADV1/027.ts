import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ラルト",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [280],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ポンド",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "リンクブラスト",
                                                                      },
          effect: {
                        ja: "ラルトと防御ポケモンのエネルギーが異なるエネルギーを持っている場合、この攻撃のベースダメージは40ではなく10です。",
                                                                      },
          damage: 40,
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
