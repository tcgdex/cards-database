import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カブト（デルタ種）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [140],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "不気味な光",
			},
			effect: {
				'ja-jp': "防御ポケモンは今混乱しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "シェル攻撃",
			},
			damage: 20,
		},
	],

	retreat: 2,

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
