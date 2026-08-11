import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		650,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn't faze it.",
	},

	thirdParty: {
		cardmarket: 281337
	}
}

export default card
