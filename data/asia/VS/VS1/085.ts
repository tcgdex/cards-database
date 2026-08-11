import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブルーノのウルサリング",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [217],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "軽いパンチ",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ヘッドロック",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
