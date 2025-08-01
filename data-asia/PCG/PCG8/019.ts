import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "wartortle",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [8],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "テールホイップ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "噛む",
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
