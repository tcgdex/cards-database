import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [766],

	name: {
		'en-us': "Passimian"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'en-us': "The boss chooses 10 members of the group to\ngo out hunting. The hunting party will evenly split\nthe food they find with the rest of the group."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Fling"
		},

		cost: ["Fighting"],

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card