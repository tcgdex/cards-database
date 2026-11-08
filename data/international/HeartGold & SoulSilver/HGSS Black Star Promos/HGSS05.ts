import { Card } from 'models/database/card'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Hoothoot",
		'fr-fr': "Hoothoot"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [163],
	hp: 50,
	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Insomnia",
				'fr-fr': "Insomnia"
			},
			effect: {
				'en-us': "Hoothoot can't be Asleep.",
				'fr-fr': "Hoothoot ne peut pas être endormi."
			}
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It has a perfect sense of time. Whatever happens, it keeps rhythm by precisely tilting its head in time."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275607,
				tcgplayer: 86174
			}
		},
	],

}

export default card
