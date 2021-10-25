import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Eevee VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	dexId: [133],
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		en: "Eevee V"
	},

	stage: "VMAX",

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

	retreat: 2
}

export default card