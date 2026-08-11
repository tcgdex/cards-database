import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Numel",
		'fr-fr': "Chamallot",
		'es-es': "Numel",
		'it-it': "Numel",
		'pt-br': "Numel",
		'de-de': "Camaub"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		322,
	],

	hp: 80,

	types: [
		"Fire",
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
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'es-es': "Combustión",
				'it-it': "Fuoco Continuo",
				'pt-br': "Combustão",
				'de-de': "Glühen"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The magma in its body reaches 2,200 degrees Fahrenheit. Its hump gets smaller when it uses Fire-type moves.",
	},

	thirdParty: {
		cardmarket: 288187,
		tcgplayer: 111515
	}
}

export default card
