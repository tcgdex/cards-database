import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dartrix"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [723],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Rowlet"
	},

	description: {
		'en-us': "This narcissistic Pokémon is a clean freak. If you\ndon't groom it diligently, it may stop listening to you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Skill Dive"
		},

		cost: ["Grass"],

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon."
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