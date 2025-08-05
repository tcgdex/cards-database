import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "カクナ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [14],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "高速進化",
                                                                      },
          effect: {
                        ja: "デッキを検索して進化カードを探し、相手に見せて、手に入れてください。  その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "ロールアウトする",
                                                                      },
          damage: 30,
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
