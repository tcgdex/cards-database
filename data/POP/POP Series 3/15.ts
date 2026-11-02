import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Marshtomp",
		fr: "Flobio",
		de: "Moorabbel"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [259],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Mudkip",
		fr: "Gobou",
		de: "Hydropi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue",
				de: "Lehmschelle"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Austeiler"
			},
			effect: {
				en: "Marshtomp does 10 damage to itself.",
				fr: "Flobio s'inflige 10 dégâts.",
				de: "Moorabbel fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,
	
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87236,
				cardmarket: 277463
			},
		},
	],

}

export default card
