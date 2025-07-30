import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "larvitar（デルタ種）",
                                                   },

      rarity: "Common",
      category: "Pokemon",
      dexId: [246],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "噛む",
                                                                      },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
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
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
