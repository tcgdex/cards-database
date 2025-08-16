import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ペリッパー",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [279],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "備蓄",
                                                                      },
          effect: {
                        ja: "次のターン中、Spit Upのベースダメージは30ではなく70で、Swallowのベースダメージは20ではなく60です。",
                                                                      },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "吐き出します",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
                        ja: "飲み込む",
                                                                      },
          effect: {
                        ja: "攻撃後、ペリッパーからディフェンディングポケモンに与えたダメージに等しいダメージカウンターの数を取り除きます。 Pelipperのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
                                                                      },
          damage: 20,
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
