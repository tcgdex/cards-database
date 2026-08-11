import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'de-de': "Waumpel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [265],

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
				'en-us': "Call for Friends",
				'fr-fr': "À la rescousse !",
				'de-de': "Freundesruf"
			},
			effect: {
				'en-us': "Search your deck for Grass Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck des Pokémon de base  et placez-en autant que vous le voulez sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach -Basis-Pokémon-Karten und lege beliebig viele von ihnen auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "String Shot",
				'fr-fr': "Sécrétion",
				'de-de': "Fadenschuss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90648,
				cardmarket: 275958
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90648,
				cardmarket: 275958
			},
		},
	],

}

export default card
