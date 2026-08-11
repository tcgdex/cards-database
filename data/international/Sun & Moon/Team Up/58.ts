import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
		'es-es': "Nidorino",
		'it-it': "Nidorino",
		'pt-br': "Nidorino",
		'de-de': "Nidorino"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Schnabel"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal’Korne",
				'es-es': "Perforador",
				'it-it': "Perforcorno",
				'pt-br': "Chifre Broca",
				'de-de': "Hornbohrer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately.",
	},

	thirdParty: {
		cardmarket: 368988,
		tcgplayer: 183836
	}
}

export default card
