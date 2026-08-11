import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Hoothoot",
		'de-de': "Hoothoot"
	},

	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [163],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hypnosis",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "Das verteidigende Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Eerie Light",
				'de-de': "Schauriges Licht"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86170,
				cardmarket: 275323
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86170,
				cardmarket: 275323
			},
		},
	],
}

export default card
