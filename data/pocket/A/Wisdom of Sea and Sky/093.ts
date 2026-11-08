import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sudowoodo",
		'fr-fr': "Simularbre"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [185],
	hp: 90,
	types: ["Fighting"],

	description: {
		'en-us': "Although it always pretends to be a tree,\nits composition appears more similar to\nrock than to vegetation.",
		'fr-fr': "Bien qu'il fasse semblant d'être un arbre, par sa composition, il semble plus proche d'un minéral que d'un végétal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rock Throw",
			'fr-fr': "Jet-Pierres"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card