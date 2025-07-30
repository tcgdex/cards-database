import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "poliwag",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [60],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "催眠",
                                                                      },
          effect: {
                        ja: "防御ポケモンは今眠っています。",
                                                                      },
        },
        {
          cost: ["Water"],
          name: {
                        ja: "波のスプラッシュ",
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
