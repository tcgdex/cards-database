import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "staryu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "平手打ち",
			},
			damage: 20,
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
