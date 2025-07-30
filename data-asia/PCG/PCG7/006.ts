import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "ホース（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [116],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ラム",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "安定した火の侵食",
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
