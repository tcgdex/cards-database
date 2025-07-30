import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "種子",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [273],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ヘッドバット",
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
