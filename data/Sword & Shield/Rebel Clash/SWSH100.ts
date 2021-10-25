import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur V"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	dexId: [3],
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

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

	retreat: 3
}

export default card