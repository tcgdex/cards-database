import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "ノセパス",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [299],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "目に見えない手",
                                                                      },
          effect: {
                        ja: "対戦相手のアクティブなポケモンのいずれかが進化したポケモンのいずれかである場合は、デッキを1枚のカードで検索して、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "反発",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、対戦相手は防御するポケモンとそれに取り付けられたすべてのカードを自分の手に返します。 （相手がベンチ付きポケモンや他のアクティブなポケモンを持っていない場合、この攻撃は何もしません。）",
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
