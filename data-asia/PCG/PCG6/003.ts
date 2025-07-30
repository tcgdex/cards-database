import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "Zubat",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [41],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "毒の牙",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
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
