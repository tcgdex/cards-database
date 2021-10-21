import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	description: {
		en: "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
	},

	stage: "Basic",

	name: {
		en: "Phanpy"
	},

	rarity: "None",
	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Stampede"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Strike Back"
		},

		effect: {
			en: "This attack does 30 damage for each damage counter on this Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card