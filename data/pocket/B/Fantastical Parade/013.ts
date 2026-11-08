import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [666],

	name: {
		'en-us': "Vivillon"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Spewpa"
	},

	description: {
		'en-us': "This Pokémon was born in a land where flowers\nbloom. It scatters colorful, toxic scales from its\nwings during battle."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Vivid Powder"
		},

		damage: 60,
		cost: ["Grass", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned and Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card