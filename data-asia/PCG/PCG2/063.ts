import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "シェルゴン",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [372],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "難しい保護",
                                                                      },
          effect: {
                        ja: "ポカンからの攻撃によってシェルゴンに与えられたすべての損害を防ぎます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fire", "Water"],
          name: {
                        ja: "ロックスマッシュ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 2,

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
