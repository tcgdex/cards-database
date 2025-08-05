import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "サンフロラ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [192],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "まばゆいばかりのダンス",
                                                                      },
          effect: {
                        ja: "防御するポケモンはそれぞれ混乱しています。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "グリーンブラスト",
                                                                      },
          effect: {
                        ja: "すべてのポケモンに取り付けられた各草のエネルギーに対して20のダメージと10ダメージがさらに10ダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

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
