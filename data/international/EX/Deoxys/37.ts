import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Magcargo",
		'fr-fr': "Volcaropod",
		'de-de': "Magcargo"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Slugma",
		'fr-fr': "Limagma"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Headbutt"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Ball",
				'fr-fr': "Boule brûlante",
				'de-de': "Burning Ball"
			},
			effect: {
				'en-us': "If Magcargo has at least 2 Fire Energy attached to it, the Defending Pokémon is now Burned.",
				'fr-fr': "Si Volcaropod possède au moins 2 Énergies , le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "If Magcargo has at least 2  Energy attached to it, the Defending Pokémon is now Burned."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87014,
				cardmarket: 276440
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87014,
				cardmarket: 276440
			},
		},
	],

}

export default card
