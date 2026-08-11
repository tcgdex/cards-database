import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [117],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Horsea"
	},

	description: {
		'en-us': "It's the males that raise the offspring. While\nSeadra are raising young, the spines on their\nbacks secrete thicker and stronger poison.",
		'fr-fr': "Les mâles s'occupent des petits, et tant qu'ils en ont à élever, le venin contenu dans leurs épines dorsales devient beaucoup plus fort."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Razor Fin",
			'fr-fr': "Aileron-Rasoir"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card