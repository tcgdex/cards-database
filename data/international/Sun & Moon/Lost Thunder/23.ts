import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
		'de-de': "Waumpel"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		265,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
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
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives among the tall grass and in forests. It repels attacks by raising up the spikes on its rear.",
	},

	thirdParty: {
		cardmarket: 365616,
		tcgplayer: 178824
	}
}

export default card
