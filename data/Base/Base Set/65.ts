import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Staryu",
		fr: "Stari",
		de: "Sterndu",
		it: "Staryu"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Slap",
				fr: "Gifle",
				de: "Hieb",
				it: "Sberla"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon bien curieux qui peut régénérer ses appendices sectionnés lors d'un combat.",
		it: "Pokémon enigmatico che può rigenerare senza sforzo qualsiasi parte del corpo persa in combattimento. LIV 15 N.120"
	},

	thirdParty: {
		cardmarket: 273760,
		tcgplayer: 42410
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
			cardPath: "data-asia/PMCG/PMCG1/025.ts"
		}
	]
}

export default card
