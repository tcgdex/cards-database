import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [870],

	name: {
		'en-us': "Falinks"
	},

	illustrator: "okayamatakatoshi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "The leader, known as the brass, uses its\nextendible horn to issue orders to the others\nwhen it's time to change formation."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Coordinated Unit"
		},

		effect: {
			'en-us': "If you have another Falinks in play, this Pokémon's attacks do +20 damage to your opponent's Active Pokémon, and this Pokémon takes −20 damage from attacks from your opponent's Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Invade"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card