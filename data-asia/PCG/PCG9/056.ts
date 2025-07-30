import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "NATU（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [177],
      hp: 40,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
                        ja: "フロップ",
                                                                      },
          damage: 10,
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
