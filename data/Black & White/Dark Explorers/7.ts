import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Dwebble",
		fr: "Crabicoque",
		es: "Dwebble",
		it: "Dwebble",
		pt: "Dwebble",
		de: "Lithomith"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		557,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Beat",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280335
	}
}

export default card
