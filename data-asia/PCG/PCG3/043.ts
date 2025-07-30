import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "メタン",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [375],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "サイキックブーム",
                                                                      },
          effect: {
                        ja: "ディフェンディングポケモンに付随する各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "素早い打撃",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
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
