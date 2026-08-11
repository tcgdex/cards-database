import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [27],

	name: {
		'en-us': "Sandshrew"
	},

	illustrator: "Uninori",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "No matter how high a place it falls from, this\nPokémon can save itself by rolling into a ball\nand bouncing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Double Scratch"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card