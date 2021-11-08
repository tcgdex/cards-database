import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",

	name: {
		en: "Blastoise V"
	},

	rarity: "None",
	dexId: [9],
	hp: 220,
	types: ["Water"],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Torrential Cannon"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Torrential Cannon."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",
	suffix: "V"
}

export default card
