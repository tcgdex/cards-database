import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'pt-br': "Squirtle",
		'de-de': "Schiggy"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
	},

	thirdParty: {
		cardmarket: 368954,
		tcgplayer: 183794
	}
}

export default card
