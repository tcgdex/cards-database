import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "バゴン（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [371],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "ember",
                                                                      },
          effect: {
                        ja: "バゴンに取り付けられた消防剤カードを捨てます。",
                                                                      },
          damage: 30,
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
