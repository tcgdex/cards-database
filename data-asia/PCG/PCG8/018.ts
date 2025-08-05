import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "squirtle",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [7],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "固体シェル",
                                                                      },
          effect: {
                        ja: "攻撃によってスカートルに与えられた損傷は10倍に減少します（脱力と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "バブルビーム",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
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
