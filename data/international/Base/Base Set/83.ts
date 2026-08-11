import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Maintenance",
		'fr-fr': "Entretien",
		'de-de': "Wartung",
		'it-it': "Manutenzione"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Shuffle 2 of the other cards from your hand into your deck in order to draw a card.",
		'fr-fr': "Mélangez 2 des autres cartes de votre main avec votre deck pour piocher une carte.",
		'de-de': "Mische 2 Karten aus Deiner Hand in Deinen Stapel.",
		'it-it': "Rimetti 2 delle altre carte che hai in mano nel tuo mazzo, rimischialo e poi pesca una carta."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273778,
				tcgplayer: 42429
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107080
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107080
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
