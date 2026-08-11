import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "swinub",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [220],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "パウダースノー",
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
		},
	],
};

export default card
