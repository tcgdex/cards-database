import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Girafarig",
		'de-de': "Girafarig"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [203],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Patch",
				'de-de': "Energieflicken"
			},
			effect: {
				'en-us': "Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon.",
				'de-de': "Nimm eine Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, und lege sie an ein anderes deiner Pokémon an."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],

			name: {
				'en-us': "Syncroblast",
				'de-de': "Synchroknall"
			},

			effect: {
				'en-us': "If Girafarig and the Defending Pokémon don't have the same number of Energy cards attached to them, this attack's base damage is 10 instead of 40.",
				'de-de': "Liegen an Girafarig und am verteidigenden Pokémon nicht die gleiche Anzahl an Energiekarten an, beträgt der Basis-Schaden dieses Angriffs 10 anstatt 40."
			},

			damage: 40,
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85727,
				cardmarket: 275316
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85727,
				cardmarket: 275316
			},
		},
	],
}

export default card
