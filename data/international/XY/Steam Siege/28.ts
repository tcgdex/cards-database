import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
		'es-es': "Shellos",
		'it-it': "Shellos",
		'pt-br': "Shellos",
		'de-de': "Schalellos"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		422,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its shape and coloration vary, depending on its habitat.",
	},

	thirdParty: {
		cardmarket: 291529,
		tcgplayer: 121015
	}
}

export default card
