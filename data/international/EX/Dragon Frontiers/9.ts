import { Card } from 'models/database/card'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		'en-us': "Pinsir δ",
		'fr-fr': "Scarabrute δ",
		'de-de': "Pinsir"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Armor",
				'fr-fr': "Armure",
				'de-de': "Rüstung"
			},
			effect: {
				'en-us': "If your opponent has 5 or more cards in his or her hand, any damage done to Pinsir by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Si votre adversaire possède au moins 5 cartes en main, les dégâts infligés à Scarabrute par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'de-de': "Wenn dein Gegner 5 oder mehr Karten auf der Hand hat, wird jeder Schaden, der Pinsir durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Delta Call",
				'fr-fr': "Appel Delta",
				'de-de': "Delta-Ruf"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon that has δ on its card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck un Pokémon possédant le symbole δ, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einem Pokémon, auf dem δ zu sehen ist, zeige es deinem Gegner und nimm es auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guillotine",
				'fr-fr': "Guillotine",
				'de-de': "Guillotine"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 277214
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
