import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Crabrawler",
		fr: "Crabagarre",
		es: "Crabrawler",
		it: "Crabrawler",
		pt: "Crabrawler",
		de: "Krabbox"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		739,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Light Punch",
				fr: "Poing Léger",
				es: "Puño Ligero",
				it: "Pugnetto",
				pt: "Soco de Luz",
				de: "Leichter Hieb"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 299475
	}
}

export default card
