import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Stakataka",
		fr: "Ama-Ama"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		en: "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other.",
		fr: "Il est sorti d'une Ultra-Brèche. Il est composé de plusieurs petites entités qui s'assemblent pour n'en former qu'une seule."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Brass Rock",
			fr: "Brass Rock"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit – 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card