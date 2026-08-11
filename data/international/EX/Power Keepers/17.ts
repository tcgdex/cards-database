import { Card } from 'models/database/card'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'de-de': "Flunkifer"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		303,
	],

	hp: 60,

	types: [
		"Metal",
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
				'fr-fr': "Cherchez dans votre deck un Pokémon de Base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pull Away",
				'fr-fr': "Arracher",
				'de-de': "Wegziehen"
			},
			effect: {
				'en-us': "If your opponent has 5 or more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand.",
				'fr-fr': "Si votre adversaire possède au moins 5 cartes dans sa main, il doit défausser des cartes jusqu'à ce qu'il ne lui reste plus que 4 cartes en main.",
				'de-de': "Falls dein Gegner mindestens 5 Karten auf der Hand hat, legt er so viele seiner Handkarten auf seinen Ablagestapel, bis er nur noch 4 Karten auf der Hand hat."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277323,
		tcgplayer: 87260
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

