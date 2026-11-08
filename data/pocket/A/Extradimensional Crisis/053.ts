import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Stakataka",
		'fr-fr': "Ama-Ama"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [805],
	hp: 110,
	types: ["Metal"],

	description: {
		'en-us': "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other.",
		'fr-fr': "Il est sorti d'une Ultra-Brèche. Il est composé de plusieurs petites entités qui s'assemblent pour n'en former qu'une seule."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Brass Rock",
			'fr-fr': "Brass Rock"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit – 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card