import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "staryu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "急速なスピン",
			},
			effect: {
				'ja-jp': "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。ベンチ付きポケモンの1つでStaryuを切り替えます。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
