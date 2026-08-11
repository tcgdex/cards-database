import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [845],

	name: {
		'en-us': "Cramorant"
	},

	illustrator: "osare",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "Cramorant takes advantage of Arrokuda's frantic\nthrashing to help spit Arrokuda out at high speed."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spit-Out Shot"
		},

		cost: ["Water"],

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card