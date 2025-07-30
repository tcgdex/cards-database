import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "マクヒタ",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [296],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "推力",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合は、防御ポケモンに取り付けられた1つのエネルギーカードを捨てます。",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "上昇する突進",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
                                                                      },
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
