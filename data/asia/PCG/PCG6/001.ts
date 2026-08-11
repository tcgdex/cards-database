import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "雑草",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [13],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ストリングショット",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
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
