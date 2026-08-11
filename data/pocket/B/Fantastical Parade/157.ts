import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [407],

	name: {
		'en-us': "Roserade"
	},

	illustrator: "tono",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Roselia"
	},

	description: {
		'en-us': "The poison in its right hand is quick acting.\nThe poison in its left hand is slow acting.\nBoth are life threatening."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Poison Ring"
		},

		damage: 50,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card