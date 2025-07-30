import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "ヤンマ",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [193],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "グランドループ",
                                                                      },
          effect: {
                        ja: "2枚のカードを描きます。 Yanmaをベンチ付きポケモン1枚で切り替えることができます。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "尾を回します",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
