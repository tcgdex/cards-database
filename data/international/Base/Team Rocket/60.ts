import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Magnetism",
				'fr-fr': "Magnétisme",
				'de-de': "Magnetism"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Magnemite, Magneton, and Dark Magneton on your Bench.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Magneti, Magneton et Magneton obscur de votre Banc.",
				'de-de': "Does 10 damage plus 10 more damage for each Magnemite, Megneton and Dark Magneton on your Bench."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is said that enough Magnemites and Magnetons gather in one place, they can create a powerful magnetic barrier.",
		'fr-fr': "La rumeur prétend que si un nombre suffisant de Magneti et de Magneton se rassemblent, ils peuvent créer une puissante barrière magnétique."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274113,
				tcgplayer: 87068
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274113,
				tcgplayer: 87068
			}
		}
	]
}

export default card
