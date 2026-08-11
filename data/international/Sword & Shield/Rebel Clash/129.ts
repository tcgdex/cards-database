import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [436],

	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Speed Dive",
				'fr-fr': "Plongée Rapide",
				'es-es': "Picado Rápido",
				'it-it': "Immersione Rapida",
				'pt-br': "Mergulho Veloz",
				'de-de': "Tempohechtsprung"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 60,
	types: ["Metal"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It appears in ancient ruins. The pattern on its body doesn't come from any culture in the Galar region, so it remains shrouded in mystery."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458043,
				tcgplayer: 213225
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458043,
				tcgplayer: 213225
			}
		},
	],
}

export default card
