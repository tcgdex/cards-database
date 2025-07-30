import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ギャラドス",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 90,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "ドラゴンスパーク",
                                                                      },
          effect: {
                        ja: "この攻撃は、相手の各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "完全な報復",
                                                                      },
          effect: {
                        ja: "20のダメージ数は、Magikarpのすべてのダメージ数をカウンターします。",
                                                                      },
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
                        ja: "粉砕します",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンがすでに少なくとも2つのダメージカウンターを既に持っている場合、この攻撃は50のダメージと50のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
