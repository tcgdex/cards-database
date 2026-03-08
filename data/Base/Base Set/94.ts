import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Potion",
		fr: "Potion",
		de: "Trank",
		it: "Pozione Magica"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Retirez jusqu'à 2 marqueurs de dégâts d'1 de vos Pokémon.",
		de: "Entferne bis zu 2 Schadensmarken von einem Deiner Pokémon.",
		it: "Togli al massimo 2 segnalini danno da uno dei tuoi Pokémon."
	},

	thirdParty: {
		cardmarket: 273789,
		tcgplayer: 42438
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
			cardPath: "data-asia/PMCG/PMCG1/071.ts"
		}
	]
}

export default card
