import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Tenefix",
		'de-de': "Zobiris"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [302],

	hp: 60,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Pull Out",
				'fr-fr': "Déraciner",
				'de-de': "Herausziehen"
			},
			effect: {
				'en-us': "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
				'fr-fr': "Cherchez une carte dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Karte, zeige sie deinem Gegner und lege sie oben auf dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Hand",
				'fr-fr': "Main sombre",
				'de-de': "Dunkle Hand"
			},
			effect: {
				'en-us': "If you have more cards in your hand than your opponent, this attack does 20 damage plus 30 more damage.",
				'fr-fr': "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt dieser Angriff 20 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279288,
				tcgplayer: 88854
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279288,
				tcgplayer: 88854
			}
		}
	],

}

export default card
