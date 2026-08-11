import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'de-de': "Menki"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [56],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud’poing",
				'de-de': "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Karate Chop",
				'fr-fr': "Poing-Karaté",
				'de-de': "Karateschlag"
			},
			effect: {
				'en-us': "Does 40 damage minus 10 damage for each damage counter on Mankey.",
				'fr-fr': "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Férosinge.",
				'de-de': "Dieser Angriff fügt 40 Schadenspunkte minus 10 Schadenspunkte für jede Schadensmarke auf Menki zu."
			},
			damage: "40-",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is extremely ill-tempered. Groups of them will attack any handy target for no reason."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87176,
				cardmarket: 279209
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87176,
				cardmarket: 279209
			}
		},
	],

}

export default card
