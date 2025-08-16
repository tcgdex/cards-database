import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magmar",
		de: "Magmar"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				de: "Glühende Kohlen"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Punch",
				de: "Magmahieb"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279705,
		tcgplayer: 87052
	}
}

export default card
