import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ニドリーナ（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [30],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "毒物",
                                                                      },
          effect: {
                        ja: "防御ポケモンは現在中毒になっています。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
                        ja: "リアキック",
                                                                      },
          damage: 40,
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
