import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Zubat",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ラム",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 20,
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
