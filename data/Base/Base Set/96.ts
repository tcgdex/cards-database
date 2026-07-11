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
		en: "Provides {C}{C} energy.\nDoesn't count as a basic Energy card.",
		de: "Liefert   Energie. Zählt nicht als Basis-Energiekarte.",
		it: "Fornisce energia Incolore Incolore. Non conta come carta Energia base.",
		fr: "Fournit Incolore Incolore énergies. Ne compte pas comme une carte Énergie de base.",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273791,
				tcgplayer: 42440
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107099
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107099
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
