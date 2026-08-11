import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [648],

	name: {
		'en-us': "Meloetta"
	},

	illustrator: "REND",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'en-us': "Its melodies are sung with a special vocalization\nmethod that can control the feelings of those who\nhear it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Strange Singing"
		},

		effect: {
			'en-us': "At the beginning of your turn, if this Pokémon is in the Active Spot, put a random {P} Pokémon from your deck into your hand."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psyshot"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card