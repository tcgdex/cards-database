import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "シール",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [86],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "降ろす",
			},
			effect: {
				ja: "Seelはそれ自体に10ダメージを与えます。",
			},
			damage: 30,
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
