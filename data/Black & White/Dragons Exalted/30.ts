import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'Glace",
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280469,
		tcgplayer: 89034
	}
}

export default card
