import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marill",
		'fr-fr': "Marill"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [183],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The fur on its body naturally repels water. It can\nstay dry even when it plays in the water.",
		'fr-fr': "Sa fourrure est imperméable, si bien qu'il reste sec même quand il joue dans l'eau."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card