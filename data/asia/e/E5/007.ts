import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニドランf",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "毒物",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st Edition"],
		},
	],
};

export default card
