import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Center",
		fr: "Centre Pokémon",
		de: "Pokémon Center"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez tous les marqueurs de dégâts de tous vos propres Pokémon ayant des marqueurs de dégâts sur eux, puis défaussez toutes les cartes Énergie attachées à ces Pokémon.",
		de: "Entferne alle auf Deinem Pokémon abgelegten Schadensmarken. Entferne dann alle auf diesem Pokémon abgelegten Energiekarten."
	},

	thirdParty: {
		cardmarket: 273780
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
			cardPath: "data-asia/PMCG/PMCG1/083.ts"
		}
	]
}

export default card
