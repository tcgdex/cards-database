import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [43],

	name: {
		'en-us': "Oddish"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "If exposed to moonlight, it starts to move.\nIt roams far and wide at night to scatter its seeds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Powder"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card