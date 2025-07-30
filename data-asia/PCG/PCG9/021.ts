import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "シェルゴン（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [372],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ヘッドバット",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "ダブルエッジ",
                                                                      },
          effect: {
                        ja: "シェルゴンはそれ自体に10ダメージを与えます。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

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
