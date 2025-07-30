import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "Pupitar（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [247],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "麻痺する視線",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "ダブルエッジ",
                                                                      },
          effect: {
                        ja: "Pupitarはそれ自体に10ダメージを与えます。",
                                                                      },
          damage: 40,
        },
      ],


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
