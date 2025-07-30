import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "シルクーン",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [266],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ラム",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "高度な鎧",
                                                                      },
          effect: {
                        ja: "相手の次のターン中に、相手の進化したポケモンによるシルクーンに与えられた損害を含む攻撃のすべての影響を防ぎます。",
                                                                      },
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
