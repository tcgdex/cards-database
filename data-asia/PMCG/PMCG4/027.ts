import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Voltorb",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "スピードボール",
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
