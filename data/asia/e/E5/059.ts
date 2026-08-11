import { Card } from "models/database/card"
import Set from "../E5"

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
			cost: ["Colorless"],
			name: {
				'ja-jp': "昼寝",
			},
			effect: {
				'ja-jp': "Jigglypuffから1つのダメージカウンターを取り外します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "子守lulaby",
			},
			effect: {
				'ja-jp': "防御ポケモンは今眠っています。",
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
