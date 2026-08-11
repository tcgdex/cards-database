import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [168],

	name: {
		'en-us': "Ariados"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Spinarak"
	},

	description: {
		'en-us': "It spews threads from its mouth to catch its\nprey. When night falls, it leaves its web to go\nhunt aggressively."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Trap Territory"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon's Retreat Cost is 1 more."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Pierce"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card