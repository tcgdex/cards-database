import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'de-de': "Griffel"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		190,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pilfer",
				'fr-fr': "Chapardage",
				'de-de': "Stibitzen"
			},
			effect: {
				'en-us': "Shuffle Aipom and all cards attached to it into your deck. Flip a coin. If heads, shuffle a card from your discard pile into your deck.",
				'fr-fr': "Mélangez Capumain et toutes les cartes qui lui sont attachées dans votre deck. Lancez une pièce. Si c'est face, mélangez une carte de votre pile de défausse dans votre deck.",
				'de-de': "Mische Griffel und alle daran angelegten Karten zurück in dein Deck. Wirf eine Münze. Mische bei 'Kopf' eine Karte aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Rap",
				'fr-fr': "Frap'keu",
				'de-de': "Schweifklopfen"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf zwei Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		'en-us': "Its tail is so powerful that it can use it to grab a tree branch and hold itself up in the air.",
		'fr-fr': "Sa queue est si puissante qu'il peut s'en servir pour attraper une branche d'arbre et se suspendre en l'air."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274426,
				tcgplayer: 83485
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274426,
				tcgplayer: 83485
			}
		}
	]
}

export default card
