import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Geodude"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [74],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "Geodude that have lived a long life have had all\ntheir edges smoothed out until they're totally\nround. They also have a calm, quiet disposition."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-blaziken"]
}

export default card