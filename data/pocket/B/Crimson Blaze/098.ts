import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [794],

	name: {
		'en-us': "Buzzwole ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Punch"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Big Beat"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Big Beat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card