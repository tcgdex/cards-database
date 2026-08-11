import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [213],

	name: {
		'en-us': "Shuckle"
	},

	illustrator: "Yuriko Akase",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'en-us': "The berries stored in its vaselike shell eventually\nbecome a thick, pulpy juice."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Guard Press"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card