import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Doduo"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [84],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "A two-headed Pokémon that was discovered as a\nsudden mutation. It runs at a pace of over 60 miles\nper hour."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Peck"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card