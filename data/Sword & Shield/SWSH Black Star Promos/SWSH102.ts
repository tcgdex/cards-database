import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Common",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		en: "Venusaur V"
	},

	attacks: [{
		name: {
			en: "Forest Storm"
		},

		effect: {
			en: "This attack does 30 damage for each Grass Energy attached to all of your Pokémon."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "G-Max Bloom"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 210,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card