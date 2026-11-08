import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret"
	},

	illustrator: "yuu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [215],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "This cunning Pokémon hides under the cover of\ndarkness, waiting to attack its prey.",
		'fr-fr': "Ce Pokémon rusé se cache dans l'ombre et attend patiemment de fondre sur sa proie."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card