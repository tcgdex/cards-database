import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	dexId: [3],
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		en: "Venusaur V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Forest Storm"
		},

		effect: {
			en: "This attack does 30 damage for each Grass Energy attached to all of your Pokémon."
		},

		damage: "30×"
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "G-Max Bloom"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 210
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card