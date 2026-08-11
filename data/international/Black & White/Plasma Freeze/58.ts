import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'es-es': "Nidoking",
		'it-it': "Nidoking",
		'pt-br': "Nidoking",
		'de-de': "Nidoking"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 140,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lovestrike",
				'fr-fr': "Coup de Foudre",
			},
			effect: {
				'en-us': "Does 40 more damage for each Nidoqueen on your Bench.",
				'fr-fr': "Inflige 40 dégâts supplémentaires pour chaque Nidoqueen sur votre Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Drill",
				'fr-fr': "Empal'Korne",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
	},

	thirdParty: {
		cardmarket: 280936,
		tcgplayer: 87700
	}
}

export default card
