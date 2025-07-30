import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "SEEL（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [86],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ポンド",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "オーロラビーム",
                                                                      },
          damage: 20,
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
