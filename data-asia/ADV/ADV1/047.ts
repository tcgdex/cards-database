import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "プーチエナ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [261],
      hp: 50,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
                        ja: "シャドウバインド",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
