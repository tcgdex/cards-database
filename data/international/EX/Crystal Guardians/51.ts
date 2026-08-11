import { Card } from 'models/database/card'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skelenox",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez 1 carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Super Psy Bolt",
				'fr-fr': "Super psy",
				'de-de': "Super-Psischlag"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277132,
		tcgplayer: 85048
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
