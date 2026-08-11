import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シードラ（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [117],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "炎を焼きます",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在燃やされています。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "燃焼",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
