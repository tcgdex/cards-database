import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		de: "Nockchan",
		it: "Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Jab",
				fr: "Taquet",
				de: "Boxschlag",
				it: "Stoccata"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Special Punch",
				fr: "Punch Spécial",
				de: "Spezialschlag",
				it: "Pugno speciale"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il distribue des séries de coups de poing rapides comme l'éclair, invisibles à l'œil nu.",
		it: "Anche se sembra inerme, tira fulminee scariche di pugni, impossibili da vedere. LIV 33 N.107"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273702,
		tcgplayer: 42415
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/058.ts"
		}
	]
}

export default card
