import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "Mareep（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [179],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

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
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
