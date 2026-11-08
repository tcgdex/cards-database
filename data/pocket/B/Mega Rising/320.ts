import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Primarina ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [730],
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Brionne"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Hydro Pump"
		},

		damage: 40,
		cost: ["Water"],

		effect: {
			'en-us': "If this Pokémon has at least 1 extra {W} Energy attached, this attack does 40 more damage."
		}
	}, {
		name: {
			'en-us': "Sparkling Aria"
		},

		damage: 100,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card