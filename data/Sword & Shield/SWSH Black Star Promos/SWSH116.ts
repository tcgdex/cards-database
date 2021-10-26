import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Atsushi Furusawa",
	category: "Pokemon",

	description: {
		en: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity."
	},

	stage: "Basic",

	name: {
		en: "Morpeko"
	},

	rarity: "None",
	dexId: [877],
	hp: 80,
	types: ["Lightning"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Famished"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Thunder Shock"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
