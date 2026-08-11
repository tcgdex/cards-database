import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [381],

	name: {
		'en-us': "Latios"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'en-us': "It understands human speech and is highly\nintelligent. It is a tender Pokémon that\ndislikes fighting."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fantastical Floating"
		},

		effect: {
			'en-us': "If you have Latias in play, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Luster Purge"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Psychic"],

		effect: {
			'en-us': "Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card