import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Psyduck",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [54],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "混乱波",
                                                                      },
          effect: {
                        ja: "Psyduckと防御ポケモンの両方が混乱しています。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
