import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		de: "Psychoenergie",
		it: "Energia Psiche"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 273796,
		tcgplayer: 42349
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
			cardPath: "data-asia/PMCG/PMCG1/101.ts"
		}
	]
}

export default card
