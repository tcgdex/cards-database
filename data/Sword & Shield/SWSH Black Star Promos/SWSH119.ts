import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Yuya Oka",
	category: "Pokemon",

	description: {
		en: "This Pokémon’s stomach is so strong, even eating moldy or rotten food will not affect it."
	},

	stage: "Basic",

	name: {
		en: "Snorlax"
	},

	rarity: "None",
	dexId: [143],
	hp: 140,
	types: ["Colorless"],

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

	retreat: 4,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card