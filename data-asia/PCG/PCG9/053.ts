import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ニドラン（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [Unknown],
      hp: 40,
      types: ["Darkness"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ペック",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Darkness"],
          name: {
                        ja: "ポイズンホーン",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
                                                                      },
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
