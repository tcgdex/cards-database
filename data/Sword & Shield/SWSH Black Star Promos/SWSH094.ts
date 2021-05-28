import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee"
	},

	attacks: [{
		name: {
			en: "Energize"
		},

		effect: {
			en: "Attach a Lightning Energy card from your discard pile to this Pokémon."
		},

		cost: ["Lightning"]
	}, {
		name: {
			en: "Thunder"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}]
}

export default card