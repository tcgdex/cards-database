import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		11,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
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
		cardmarket: 396592
	}
}

export default card
