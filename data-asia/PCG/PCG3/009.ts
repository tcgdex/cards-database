import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "Surskit",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [283],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
                        ja: "敏ility性",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にSurskitに行われた損害を含む攻撃のすべての影響を防ぎます。",
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
