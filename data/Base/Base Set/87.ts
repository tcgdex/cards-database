import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokédex",
		fr: "Pokédex",
		de: "Pokédex"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez jusqu'à 5 des 5 premières cartes du dessus de votre deck et triez-les comme bon vous semble.",
		de: "Schaue Dir bis zu fünf der obersten Karten Deines Stapels an und lege sie in beliebiger Reihenfolge wieder in Deinen Stapel zurück."
	},

	thirdParty: {
		cardmarket: 273782
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
