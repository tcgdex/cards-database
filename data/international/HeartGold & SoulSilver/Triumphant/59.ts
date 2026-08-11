import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Carvanha",
		'fr-fr': "Carvanha",
		'de-de': "Kanivanha"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [318],

	hp: 50,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Focus Energy",
				'fr-fr': "Puissance",
				'de-de': "Energiefokus"
			},
			effect: {
				'en-us': "During your next turn, Carvanha's Bite attack's base damage is 40.",
				'fr-fr': "Pendant votre prochain tour, l’attaque Morsure de Carvanha inflige 40 dégâts de base.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden von Kanivanhas Biss 40 Schadenspunkte."
			},

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
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

	retreat: 1,

	description: {
		'en-us': "They form packs to attack boats and rip out their hulls to sink them. They live in rivers in the jungle."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84116,
				cardmarket: 279589
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279589,
				tcgplayer: 84116
			}
		},
	],

}

export default card
