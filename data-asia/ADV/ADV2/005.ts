import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "照らされます",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [314],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "輝く画面",
                                                                      },
          effect: {
                        ja: "Volbeatが機能している限り、Pokã©MonとDarknessPokã©Monとの戦いによる攻撃によって照らされた損害は30減少します。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "混oticとしたノイズ",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。  尾の場合、防御ポケモンは今眠っています。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "ペスター",
                                                                      },
          effect: {
                        ja: "防御ポケモンが特別な状態の影響を受ける場合、この攻撃は20のダメージと20のダメージを与えます。",
                                                                      },
        },
      ],

      retreat: 1,

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

export default card
