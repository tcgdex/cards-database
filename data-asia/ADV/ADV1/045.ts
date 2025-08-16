import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "delcatty",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [301],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "エネルギーの引き分け",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前に）、手から1枚のエネルギーカードを捨てることができます。  次に、デッキから最大3枚のカードを作成します。  Delcattyが特別な状態の影響を受ける場合、このパワーは使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "最大エネルギー源",
                                                                      },
          effect: {
                        ja: "アクティブなポケモンのすべてに取り付けられたエネルギーの量を10回ダメージします。",
                                                                      },
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
	],
};
