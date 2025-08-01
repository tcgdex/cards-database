import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Eevee",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [133],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "エネルギーの進化",
                                                                      },
          effect: {
                        ja: "手からイービーにエネルギーカードを取り付けるたびに、Eeveeに接続したエネルギーカードと同じタイプのEeveeから進化するカードをデッキを検索することができます。そのカードをEeveeに置きます。 （これは進化するEeveeとしてカウントされます。）その後、デッキをシャッフルします。攻撃の効果の一部としてEeveeにエネルギーカードを取り付ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "尾のwhap",
                                                                      },
          damage: 10,
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
