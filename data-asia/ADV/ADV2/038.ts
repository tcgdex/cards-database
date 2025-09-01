import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "アノリス",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [347],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "高速進化",
                                                                      },
          effect: {
                        ja: "デッキを検索して進化カードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ピアス",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};

export default card
