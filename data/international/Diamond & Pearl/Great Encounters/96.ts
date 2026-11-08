import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Zigzagoon",
		'fr-fr': "Zigzaton",
		'de-de': "Zigzachs"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		263,
	],

	hp: 50,

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
				'en-us': "Pull Out",
				'fr-fr': "Déraciner",
				'de-de': "Herausziehen"
			},
			effect: {
				'en-us': "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
				'fr-fr': "Choisissez n'importe quelle carte dans votre pile de défausse, montrez-la à votre adversaire et placez-la au dessus de votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Karte, zeige sie deinem Gegner und lege sie auf dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Stab",
				'fr-fr': "Coup double",
				'de-de': "Doppelstich"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It walks in zigzag fashion. It is good at finding items in the grass and even in the ground.",
	},

	thirdParty: {
		cardmarket: 277998,
		tcgplayer: 90748
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
