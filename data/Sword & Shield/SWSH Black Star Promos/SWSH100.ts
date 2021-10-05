import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",
	suffix: "V",

	name: {
		en: "Venusaur V"
	},

	rarity: "None",
	dexId: [3],
	hp: 220,
	types: ["Grass"],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Leaf Drain"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 50
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Double-Edge"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 190
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card