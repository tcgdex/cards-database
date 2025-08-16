import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Swablu",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [333],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "綿毛",
                                                                      },
          effect: {
                        ja: "Swabluが対戦相手の攻撃によって損傷または影響を受け、すでに少なくとも1つのダメージカウンターがあるときはいつでも、コインをひっくり返します。頭の場合は、Swabluに行われた損害を含む、その攻撃のすべての影響を防ぎます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ペック",
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
