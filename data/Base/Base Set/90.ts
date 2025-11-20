import { Card } from '../../../interfaces'
import Set from '../Base Set'
import AsianCard from "../../../data-asia/PMCG/PMCG1/075.ts";

const card: Card = {
	name: {
		en: "Super Potion",
		fr: "Super Potion",
		de: "Supertrank"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 1 carte Énergie attachée à 1 de vos propres Pokémon afin de retirer jusqu'à 4 marqueurs de dégâts de ce Pokémon.",
		de: "Entferne eine auf einem Deiner Pokémon abgelegte Energiekarte, um das Pokémon von bis zu vier Schadensmarken zu befreien."
	},

	thirdParty: {
		cardmarket: 273785,
		tcgplayer: 42434
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
			card: AsianCard
		}
	]
}

export default card
