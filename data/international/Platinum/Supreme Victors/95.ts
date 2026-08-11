import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'de-de': "Plaudagei"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [441],

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
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nosedive",
				'fr-fr': "Descendre en piqué",
				'de-de': "Sturzflugangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Chatot does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Pijako s'inflige 10 dégâts.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt Plaudagei sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Its tongue is just like a human's. As a result, it can cleverly mimic human speech."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84242,
				cardmarket: 278786
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278745,
				tcgplayer: 84242
			}
		},
	],

}

export default card
