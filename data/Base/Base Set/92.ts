import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Energy Removal",
		fr: "Suppression d'Énergie",
		de: "Energie-Absauger",
		it: "Distruzione di Energia"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		de: "Wähle eine auf einem Pokémon Deines gegners abgelegte Energiekarte und entferne sie.",
		it: "Scegli una carta Energia assegnata a uno dei Pokémon del tuo avversario e scartala."
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
			cardPath: "data-asia/PMCG/PMCG1/070.ts"
		}
	]
}

export default card
