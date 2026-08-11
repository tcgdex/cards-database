import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
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
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne",
				'es-es': "Agarre",
				'it-it': "Presa",
				'pt-br': "Agarramento Viciado",
				'de-de': "Klammer"
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
		'en-us': "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
	},

	thirdParty: {
		cardmarket: 372337,
		tcgplayer: 189145
	}
}

export default card
