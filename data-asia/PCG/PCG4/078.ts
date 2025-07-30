import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "チャンジー",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [113],
      hp: 90,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ハイパーヒーリング",
                                                                      },
          effect: {
                        ja: "アクティブなポケモンのそれぞれから1つのダメージカウンターとすべての特別な条件を削除します。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ダブルタックル",
                                                                      },
          effect: {
                        ja: "防御する各ポケモンに20のダメージを与えます。",
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
