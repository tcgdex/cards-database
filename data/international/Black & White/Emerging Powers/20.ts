import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
		'es-es': "Darumaka",
		'it-it': "Darumaka",
		'pt-br': "Darumaka",
		'de-de': "Flampion"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		554,
	],

	hp: 70,

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
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
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

	retreat: 2,

	description: {
		'en-us': "When its internal fire is burning, it cannot calm down and it runs around. When the fire diminishes, it falls asleep.",
	},

	thirdParty: {
		cardmarket: 279985,
		tcgplayer: 84719
	}
}

export default card
