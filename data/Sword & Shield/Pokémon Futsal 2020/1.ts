import { Card } from '../../../interfaces'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu on the Ball"
	},

	illustrator: "The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},
	

	types: ["Lightning",],

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Lightning Shot"
		},

		damage: 120,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,
}

export default card
