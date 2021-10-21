import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		en: "Eevee VMAX"
	},

	rarity: "None",
	dexId: [133],
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		en: "Eevee V"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Cuddle"
		},

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
