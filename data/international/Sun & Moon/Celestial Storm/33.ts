import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'es-es': "Mudkip",
		'it-it': "Mudkip",
		'pt-br': "Mudkip",
		'de-de': "Hydropi"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
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
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d’Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
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
		'en-us': "To alert it, the fin on its head senses the flow of water. It has the strength to heft boulders.",
	},

	thirdParty: {
		cardmarket: 361279,
		tcgplayer: 170850
	}
}

export default card
