import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "jigglypuff",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [39],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "拡大する",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中にジグリプフに与えられたすべての損傷は、衰弱と抵抗を適用した後）10増加します。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
