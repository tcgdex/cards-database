import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "フライゴン（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [330],
      hp: 110,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "デルタの供給",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、基本的なエネルギーカードまたはデルタレインボーエネルギーカードを、そのカードにデルタを持っているポカモンの1つに添付できます。 Flygonが特別な状態の影響を受けている場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Grass", "Metal", "Colorless"],
          name: {
                        ja: "迅速",
                                                                      },
          effect: {
                        ja: "この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
