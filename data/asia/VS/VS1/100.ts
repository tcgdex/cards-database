import { Card } from "models/database/card"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランスのドラゴナイト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [149],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スラム",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
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
