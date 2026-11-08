import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Espeon -045/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [196],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				'ja-jp': "エネルギーリターン",
			},
			effect: {
				'ja-jp': "順番<em>（攻撃の前に）</em> </em>中に好きなように、ポクモンの1つに取り付けられたエネルギーカードを選択して、手に返します。 Espeonが特別な状態の影響を受けた場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ダメージの爆発",
			},
			effect: {
				'ja-jp': "防御ポケモンのダメージカウンターの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
			},
		},
	],


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
