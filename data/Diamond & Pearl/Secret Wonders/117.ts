import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Voltorb",
		fr: "Voltorbe",
		de: "Voltobal"
	},

	illustrator: "Satoshi Ohta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		100,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Speed Ball",
				fr: "Balle rapide",
				de: "Geschwindigkeitsball"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Big Explosion",
				fr: "Grosse explosion",
				de: "Große Explosion"
			},
			effect: {
				en: "Voltorb does 50 damage to itself.",
				fr: "Voltorbe s'inflige 50 dégâts.",
				de: "Voltobal fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277870,
		tcgplayer: 90418
	}
}

export default card
