import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Scoop Up",
		fr: "Rappel",
		de: "Aufwisch"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez 1 de vos Pokémon en jeu et reprenez sa carte Pokémon de base dans votre main. (Défaussez toutes les cartes attachées à cette carte.)",
		de: "Wähle eines Deiner Pokémon im Spiel und nimm seine Basis-Karte auf Deine Hand zurück (Entferne alle auf dieser Karte abgelegte Karten.)"
	},

	thirdParty: {
		cardmarket: 273773,
		tcgplayer: 42423
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
			cardPath: "data-asia/PMCG/PMCG1/092.ts"
		}
	]
}

export default card
