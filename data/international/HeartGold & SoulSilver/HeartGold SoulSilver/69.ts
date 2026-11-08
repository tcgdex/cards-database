import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'de-de': "Rossana"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [124],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mimic",
				'fr-fr': "Copie",
				'de-de': "Mimikry"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				'fr-fr': "Mélangez votre main dans votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes de la main de votre adversaire.",
				'de-de': "Mische deine Handkarten in dein Deck. Zähle danach die Anzahl der Karten auf der Hand deines Gegners und ziehe ebenso viele Karten."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Lick",
				'fr-fr': "Léchouille",
				'de-de': "Schlecker"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

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
		'en-us': "It rocks its body rhythmically. It appears to alter the rhythm depending on how it is feeling."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86377,
				cardmarket: 279041
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86377,
				cardmarket: 279041
			}
		},
	],

}

export default card
