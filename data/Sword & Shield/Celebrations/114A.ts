import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [644],
	set: Set,

	name: {
		en: "Zekrom"
	},

	illustrator: "5ban Graphics",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Outrage"
		},

		effect: {
			en: "Does 10 more damage for each damage counter on this Pokémon."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Bolt Strike"
		},

		effect: {
			en: "This Pokémon does 40 damage to itself."
		},

		damage: 120,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "This Pokémon appears in legends. In its tail, it has a giant generator that creates electricity."
	},

	variants: {
		reverse: false,
		normal: false
	}
}

export default card
