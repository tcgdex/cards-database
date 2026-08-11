import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
		'es-es': "Nidorina",
		'it-it': "Nidorina",
		'pt-br': "Nidorina",
		'de-de': "Nidorina"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidoran♀",
		'fr-fr': "Nidoran♀",
		'es-es': "Nidoran♀",
		'it-it': "Nidoran♀",
		'pt-br': "Nidoran♀",
		'de-de': "Nidoran♀"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'es-es': "Fuerza",
				'it-it': "Forza",
				'pt-br': "Força",
				'de-de': "Stärke"
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
		'en-us': "When feeding its young, it first chews the food into a paste, then spits it out for the offspring.",
	},

	thirdParty: {
		cardmarket: 273598,
		tcgplayer: 95965
	}
}

export default card
