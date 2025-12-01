import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Full Heal",
		fr: "Guérison Totale",
		de: "Hyperheiler"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre Pokémon actif n'est plus Endormi, Confus, Paralysé ou Empoisonné.",
		de: "Dein aktives Pokémon ist nicht mehr schlafend, verwirrt, gelähmt oder vergiftet."
	},

	thirdParty: {
		cardmarket: 273777,
		tcgplayer: 42428
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
			cardPath: "data-asia/PMCG/PMCG1/080.ts"
		}
	]
}

export default card
