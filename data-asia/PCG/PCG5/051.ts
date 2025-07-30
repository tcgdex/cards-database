import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "砂利",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [75],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "外骨格",
                                                                      },
          effect: {
                        ja: "攻撃によって砂利に与えられた損害は、衰弱と抵抗を適用した後）10増加します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ロックスライド",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンの2つに10ダメージを与えます（1つしかない場合は1）。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 2,

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
