import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "slugma",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [218],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "マグマリング",
                                                                      },
          effect: {
                        ja: "防御するポケモンは、相手の次のターン中に退却することはできません。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "フレア",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 2,

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
