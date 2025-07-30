import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "Wurmple",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [265],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "進化の兆候",
                                                                      },
          effect: {
                        ja: "シルクーンと美味しく、またはカスクーンとダストックスカードを求めてデッキを検索してください。ペアのカードまたは両方のカードを相手に見せて、それらを手に入れます。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Grass"],
          name: {
                        ja: "毒バーブ",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
