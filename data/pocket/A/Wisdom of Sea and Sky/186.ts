import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shuckle ex",
		'fr-fr': "Caratroc-ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [213],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solid Shell",
			'fr-fr': "Coquille Dure"
		},

		effect: {
			'en-us': "This Pokémon takes −20 damage from attacks.",
			'fr-fr': "Ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Triple Slap",
			'fr-fr': "Triple Gifle"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card