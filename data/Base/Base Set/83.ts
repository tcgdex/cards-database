import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Maintenance",
		fr: "Entretien",
		de: "Wartung",
		it: "Manutenzione"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 2 des autres cartes de votre main avec votre deck pour piocher une carte.",
		de: "Mische 2 Karten aus Deiner Hand in Deinen Stapel.",
		it: "Rimetti 2 delle altre carte che hai in mano nel tuo mazzo, rimischialo e poi pesca una carta."
	},

	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273778,
				tcgplayer: 42429
			}
		},
		{
			type: "normal",
			subtype: "unlimited"
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660123
			}
		}
	],
}

export default card
