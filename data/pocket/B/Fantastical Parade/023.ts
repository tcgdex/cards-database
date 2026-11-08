import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [806],

	name: {
		'en-us': "Blacephalon ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Singe"
		},

		cost: ["Fire"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned."
		}
	}, {
		name: {
			'en-us': "Pop-Punk"
		},

		damage: 140,
		cost: ["Fire", "Fire", "Fire"],

		effect: {
			'en-us': "Discard 3 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card