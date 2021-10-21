import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Vaporeon V"
	},

	rarity: "None",
	hp: 210,
	types: ["Water"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Triple Draw"
		},

		effect: {
			en: "Draw 3 cards."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Splash Jump"
		},

		damage: 90,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	regulationMark: "E",
	suffix: "V"
}

export default card
