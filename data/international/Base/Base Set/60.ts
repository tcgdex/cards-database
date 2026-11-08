import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'de-de': "Ponita",
		'it-it': "Ponyta"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Ruade",
				'de-de': "Schmetterkick",
				'it-it': "Calcio esplosivo"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de flamme",
				'de-de': "Flammenpfad",
				'it-it': "Coda-fiamma"
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
	retreat: 1,


	description: {
		'en-us': "Its hooves are 10 times harder than diamonds. It can trample anything flat in moments.",
		'fr-fr': "Ses sabots sont plus résistants que le diamant. Il peut aplatir n'importe quoi en le piétinant.",
		'it-it': "I suoi zoccoli sono più duri dei diamanti e schiacciano qualsiasi ostacolo in pochi secondi. LIV 10 N.77"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273755,
				tcgplayer: 42405
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 107057,
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 107057,
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
