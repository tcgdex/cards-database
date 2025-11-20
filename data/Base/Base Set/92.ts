import { Card } from '../../../interfaces'
import Set from '../Base Set'
import AsianCard from "../../../data-asia/PMCG/PMCG1/070.ts";

const card: Card = {
	name: {
		en: "Energy Removal",
		fr: "Suppression d'Énergie",
		de: "Energie-Absauger"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		de: "Wähle eine auf einem Pokémon Deines gegners abgelegte Energiekarte und entferne sie."
	},

	thirdParty: {
		cardmarket: 273787,
		tcgplayer: 42436
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
