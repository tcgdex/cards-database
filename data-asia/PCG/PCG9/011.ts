import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "スウェロー（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "余分な翼",
                                                                      },
          effect: {
                        ja: "ステージ2Pokã©Mon-Exのそれぞれのリトリートコストは0です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "敏ility性",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にスウェローに行われたダメージを含む攻撃のすべての影響を防ぎます。",
                                                                      },
          damage: 30,
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
