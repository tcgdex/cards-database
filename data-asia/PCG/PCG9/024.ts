import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "totodile（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [158],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "傷",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "怒り",
                                                                      },
          effect: {
                        ja: "Totodileの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
                                                                      },
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
