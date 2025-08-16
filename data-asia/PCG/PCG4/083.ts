import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Teddiursa",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [216],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "涙目",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中に、攻撃によってTeddiursaに与えられた損害は20倍に減少します（脱力感と抵抗を適用した後）。",
                                                                      },
        },
        {
          cost: ["Colorless"],
          name: {
                        ja: "傷",
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
