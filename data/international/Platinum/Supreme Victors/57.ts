import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Drifblim",
		'fr-fr': "Grodrive",
		'de-de': "Drifzepeli"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [426],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'de-de': "Windstoß"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "At dusk, swarms of them are carried aloft on winds. When noticed, they suddenly vanish."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84947,
				cardmarket: 278748
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278694,
				tcgplayer: 84947
			}
		},
	],

}

export default card
