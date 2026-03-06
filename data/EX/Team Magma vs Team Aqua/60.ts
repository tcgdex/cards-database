import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de Team Magma",
		de: "Team Magmas Puppance"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Double Spin",
				fr: "Double tour",
				de: "Doppeldreher"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276009,
		tcgplayer: 89822
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		}
	]
}

export default card
