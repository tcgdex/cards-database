import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "マグナイト",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "磁気渦",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合は、防御ポケモンに取り付けられたエネルギーを捨てます。",
                                                                      },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
