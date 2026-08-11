import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Decidueye ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [724],
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Dartrix"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Pierce the Pain"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 100 damage to 1 of your opponent's Pokémon that have damage on them."
		}
	}, {
		name: {
			'en-us': "Razor Leaf"
		},

		damage: 80,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card