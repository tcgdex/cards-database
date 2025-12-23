import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Computer Search",
		fr: "Recherche informatique",
		de: "Computersuche"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez 2 des autres cartes de votre main pour chercher n'importe quelle carte dans votre deck et la placer dans votre main. Ensuite, mélangez votre deck.",
		de: "Entferne 2 Karten aus deiner Hand, um im Stapel nach einer beliebigen Karte zu suchen. Nimm die gewählte Karte auf Deiner Hand und mische danach den Stapel."
	},

	thirdParty: {
		cardmarket: 273766,
		tcgplayer: 42417
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
			cardPath: "data-asia/PMCG/PMCG1/090.ts"
		}
	]
}

export default card
