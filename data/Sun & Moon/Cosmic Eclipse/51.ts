import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur",
		es: "Sealeo",
		it: "Sealeo",
		pt: "Sealeo",
		de: "Seejong"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 100,

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
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				es: "Desenrollar",
				it: "Rotolamento",
				pt: "Rolagem",
				de: "Walzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball’Glace",
				es: "Bola Hielo",
				it: "Palla Gelo",
				pt: "Bola de Gelo",
				de: "Frostbeule"
			},

			damage: 90,

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
		cardmarket: 407904,
		tcgplayer: 201227
	}
}

export default card
