import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [202],

	name: {
		'en-us': "Wobbuffet"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'en-us': "To keep its pitch-black tail hidden, it lives quietly\nin the darkness. It is never first to attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flip Over"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card