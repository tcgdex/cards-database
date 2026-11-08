import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'Pattes",
				'es-es': "Patada Destrucción",
				'it-it': "Calcio Esplosivo",
				'pt-br': "Chute Poderoso",
				'de-de': "Schmetterkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de Flammes",
				'es-es': "Cola de Fuego",
				'it-it': "Coda-Fiamma",
				'pt-br': "Cauda de Chamas",
				'de-de': "Flammenschweif"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its body is light, and its legs are incredibly powerful. It can clear Ayers Rock in one leap.",
	},

	thirdParty: {
		cardmarket: 293375,
		tcgplayer: 124032
	}
}

export default card
