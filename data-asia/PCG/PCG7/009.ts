import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "アエロダクチル（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [142],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "原始光",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、デッキを検索して基本的なエネルギーカードを検索し、対戦相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。アエロダクチルが特別な状態の影響を受けている場合、この電力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
                        ja: "花崗岩の頭",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中に、攻撃によってアエロダクチルに与えられた損傷は10倍に減少します（脱力感と抵抗を適用した後）。",
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
