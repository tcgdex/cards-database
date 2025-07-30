import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "クロコノー（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [159],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "怖い顔",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃したり退却したりすることはできません。",
                                                                      },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
                        ja: "スラッシュ",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

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
