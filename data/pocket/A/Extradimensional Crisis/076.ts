import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buzzwole ex",
		'fr-fr': "Mouscoto-ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [794],
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Big Beat",
			'fr-fr': "Breakbeat"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Big Beat.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Breakbeat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
