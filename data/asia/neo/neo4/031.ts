import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マンティン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [226],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				'ja-jp': "巨大な波",
			},
			effect: {
				'ja-jp': "マンティンは次のターン中に攻撃することはできません。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
