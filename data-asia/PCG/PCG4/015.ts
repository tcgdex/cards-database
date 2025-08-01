import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "slugma",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [218],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "あくび",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今眠っています。",
                                                                      },
        },
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
