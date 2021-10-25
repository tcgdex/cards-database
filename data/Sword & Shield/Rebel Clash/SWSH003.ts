import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Sobble"
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	dexId: [816],
	hp: 60,
	types: ["Water"],

	description: {
		en: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Bind"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card