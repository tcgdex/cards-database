import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Garchomp ex",
		'fr-fr': "Carchacrok-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [445],
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Gabite"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Linear Attack",
			'fr-fr': "Attaque Linéaire"
		},

		cost: ["Fighting"],

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts à l'un des Pokémon de votre adversaire."
		}
	}, {
		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
