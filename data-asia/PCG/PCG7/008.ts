import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "ギャラドススター（デルタ種）",
                                                   },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [130],
      hp: 80,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "らせん成長",
                                                                      },
          effect: {
                        ja: "尾がなくなるまでコインをひっくり返します。ヘッドごとに、廃棄パイルを検索して、基本的なエネルギーカードを調べ、Gyarados {{Star | This Pokemon}}に取り付けます。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
                        ja: "全面的な爆発",
                                                                      },
          effect: {
                        ja: "1枚のカードが残るまで、デッキの上部からカードを捨てます。この攻撃は、この方法で廃棄したエネルギーカードごとに50のダメージと20のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
