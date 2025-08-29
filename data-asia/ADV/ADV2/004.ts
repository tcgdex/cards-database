import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "volbeat",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [313],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "高揚する輝き",
                                                                      },
          effect: {
                        ja: "Illumiseが再生されている限り、Volbeatのリトリートコストは0です。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "有毒な振動",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。  尾の場合、防御ポケモンは今眠っています。",
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
