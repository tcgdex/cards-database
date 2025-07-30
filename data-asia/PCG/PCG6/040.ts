import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "メタグロス（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [376],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "デルタコントロール",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、デッキの上位4枚のカードを見て、そのうち1枚を選択して、それを手に渡すことができます。デッキの底に他の3枚のカードをあらゆる順序で置きます。 Metagrossが特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Metal"],
          name: {
                        ja: "押しつぶして燃やします",
                                                                      },
          effect: {
                        ja: "プレイ中のポケモンに添付されているだけのエネルギーカードを捨てることができます。そうした場合、この攻撃は30のダメージと、廃棄したエネルギーカードごとに20のダメージをさらに20件以上与えます。",
                                                                      },
        },
      ],

      retreat: 3,

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
