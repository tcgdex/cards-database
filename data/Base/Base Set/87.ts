import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokédex",
		fr: "Pokédex",
		de: "Pokédex",
		it: "Pokédex"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at up to 5 cards from the top of your deck and rearrange them as you like.",
		fr: "Regardez jusqu'à 5 des 5 premières cartes du dessus de votre deck et triez-les comme bon vous semble.",
		de: "Schaue Dir bis zu fünf der obersten Karten Deines Stapels an und lege sie in beliebiger Reihenfolge wieder in Deinen Stapel zurück.",
		it: "Guarda un massimo di 5 carte in cima al tuo mazzo e rimettile nell'ordine che vuoi."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		},
		{
			type: "normal",
			subtype: "unlimited"
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273782
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660119
			}
		}
	],
}

export default card
