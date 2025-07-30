import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "ティラニター（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [248],
      hp: 120,
      types: ["Fire"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "ドローを押しつぶします",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、デッキの一番上のカードを明らかにすることができます。そのカードが基本的なエネルギーカードの場合は、Pokã©Monの1つに添付してください。そうでない場合は、カードをデッキの上に戻します。 Tyranitarが特別な状態の影響を受けている場合、この力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fire", "Metal", "Colorless"],
          name: {
                        ja: "デルタクラッシュ",
                                                                      },
          effect: {
                        ja: "Tyranitarに取り付けられたエネルギーカードを捨てることができます。そうした場合、この攻撃は50ダメージに加えて20ダメージを与えます。",
                                                                      },
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
