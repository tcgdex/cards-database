import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'de-de': "Krebscorps"
	},

	illustrator: "Takao Unno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		341,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Exoskeleton",
				'fr-fr': "Exosquelette",
				'de-de': "Exoskeleton"
			},
			effect: {
				'en-us': "Any damage done to Corphish by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Les dégâts infligés à Écrapince par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Any damage done to Corphish by attacks is reduced by 10 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Chop",
				'fr-fr': "Double coup",
				'de-de': "Double Chop"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84432,
				cardmarket: 276460
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 84432,
				cardmarket: 276460
			},
		},
	],

}

export default card
