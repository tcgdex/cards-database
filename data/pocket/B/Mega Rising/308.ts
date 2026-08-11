import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Graveler"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [75],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Geodude"
	},

	description: {
		'en-us': "It climbs up cliffs as it heads toward the peak\nof a mountain. As soon as it reaches the summit,\nit rolls back down the way it came."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Lunge Out"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["mega-blaziken"]
}

export default card