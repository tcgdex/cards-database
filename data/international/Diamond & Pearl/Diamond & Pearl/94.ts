import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Kagemaru Himeno",
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
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de flammes",
				'de-de': "Flammenschweif"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "About an hour after birth, its fiery mane and tail grow out, giving it an impressive appearance.",
		'fr-fr': "La crinière et la queue ardentes lui donnant sa superbe poussent une heure après sa naissance."
	},

	thirdParty: {
		cardmarket: 277593,
		tcgplayer: 88287
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
