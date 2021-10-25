import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "Yuya Oka",
	rarity: "None",
	category: "Pokemon",
	dexId: [143],
	hp: 140,
	types: ["Colorless"],

	description: {
		en: "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Slap Push"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Single Strike Tackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card