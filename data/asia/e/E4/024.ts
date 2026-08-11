import { Card } from "models/database/card"
import Set from "../E4"

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
				'ja-jp': "平手打ち",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
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
