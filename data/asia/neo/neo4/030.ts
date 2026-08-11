import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "REMORAID",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [223],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "フューリーストライク",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
