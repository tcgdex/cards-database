import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [281],

	name: {
		'en-us': "Kirlia"
	},

	illustrator: "mingo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Ralts"
	},

	description: {
		'en-us': "The cheerful spirit of its Trainer gives it energy\nfor its psychokinetic power. It spins and dances\nwhen happy."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psybeam"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card