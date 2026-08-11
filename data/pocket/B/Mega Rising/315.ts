import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dodrio"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [85],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Doduo"
	},

	description: {
		'en-us': "An enemy that takes its eyes off any of the\nthree heads—even for a second—will get\npecked severely."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Drill Peck"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["mega-blaziken"]
}

export default card