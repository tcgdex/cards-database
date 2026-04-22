import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Double Colorless Energy",
		fr: "Double Énergie Incolore",
		de: "Doppelte farblose Energie",
		it: "Energia Incolore Doppia",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		de: "Liefert   Energie. Zählt nicht als Basis-Energiekarte.",
		it: "Fornisce energia Incolore Incolore. Non conta come carta Energia base.",
		fr: "Fournit Incolore Incolore énergies. Ne compte pas comme une carte Énergie de base.",
	},

	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273791,
				tcgplayer: 42440
			}
		},
		{
			type: "normal",
			subtype: "unlimited"
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				cardmarket: 660106
			}
		}
	],
}

export default card
