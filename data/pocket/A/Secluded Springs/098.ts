import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [443],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It skulks in caves, and when prey or an enemy\npasses by, it leaps out and chomps them.\nThe force of its attack sometimes chips its teeth.",
		'fr-fr': "Il attend qu'une proie passe pour bondir hors de son trou et la croquer. Dans son élan, il se casse parfois les dents."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card