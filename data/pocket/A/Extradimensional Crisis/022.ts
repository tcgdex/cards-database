import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [35],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "It is said that happiness will come to those who\nsee a gathering of Clefairy dancing under a\nfull moon.",
		'fr-fr': "On dit que ceux qui voient danser un groupe de Mélofée sous la pleine lune connaîtront un grand bonheur."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card