import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chimchar",
		'fr-fr': "Ouisticram"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [390],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "Its fiery rear end is fueled by gas made in its belly.\nEven rain can't extinguish the fire.",
		'fr-fr': "La flamme de sa queue est alimentée par un gaz de son estomac. Même la pluie ne saurait l'éteindre."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card