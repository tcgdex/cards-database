import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Zigzagoon",
		fr: "Zigzaton",
		de: "Zigzachs"
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
				en: "Pull Out",
				fr: "Déraciner",
				de: "Herausziehen"
			},
			effect: {
				en: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
				fr: "Choisissez n'importe quelle carte dans votre pile de défausse, montrez-la à votre adversaire et placez-la au dessus de votre deck.",
				de: "Durchsuche deinen Ablagestapel nach 1 Karte, zeige sie deinem Gegner und lege sie auf dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Stab",
				fr: "Coup double",
				de: "Doppelstich"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
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

	thirdParty: {
		cardmarket: 277998
	}
}

export default card
