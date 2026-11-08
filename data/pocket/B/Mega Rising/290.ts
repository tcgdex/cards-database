import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rowlet"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [722],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It sends its feathers, which are as sharp\nas blades, flying in attack. Its legs are strong,\nso its kicks are also formidable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Skill Dive"
		},

		cost: ["Grass"],

		effect: {
			'en-us': "This attack does 10 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card