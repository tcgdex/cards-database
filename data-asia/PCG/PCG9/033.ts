import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "キラバ（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [156],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "スマッシュキック",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "クイック攻撃",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて20ダメージを与えます。",
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
