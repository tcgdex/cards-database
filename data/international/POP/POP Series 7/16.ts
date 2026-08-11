import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Sentret",
		'fr-fr': "Sentret"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [161],

	hp: 60,

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
				'en-us': "Grope",
				'fr-fr': "À l'aveuglette"
			},
			effect: {
				'en-us': "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
				'fr-fr': "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez l'autre carte au dessous de votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	description: {
		'en-us': "It has a very nervous nature. It stands up high on its tail so it can scan wide areas."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89067,
				cardmarket: 278048
			},
		},
	],

}

export default card
