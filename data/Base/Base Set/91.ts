import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Bill",
		fr: "Léo",
		de: "Bill",
		it: "Bill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 2 cartes.",
		de: "Ziehe 2 Karten.",
		it: "Pesca 2 carte."
	},

	thirdParty: {
		cardmarket: 273786,
		tcgplayer: 42435
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
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

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/074.ts"
		}
	]
}

export default card
