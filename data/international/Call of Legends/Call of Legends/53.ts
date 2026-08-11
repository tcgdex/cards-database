import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'de-de': "Endivie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [152],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Chikorita.",
				'fr-fr': "Retirez 1 marqueur de dégât à Germignon.",
				'de-de': "Entferne 1 Schadensmarke von Endivie."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Chikorita does 10 damage to itself.",
				'fr-fr': "Germignon s’inflige 10 dégâts.",
				'de-de': "Endivie fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sunrays.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84280,
				cardmarket: 279696
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84280,
				cardmarket: 279696
			},
		},
	],

}

export default card
