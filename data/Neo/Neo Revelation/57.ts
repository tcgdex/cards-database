import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Swinub",
		fr: "Marcacrin",
		de: "Quiekel"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 40,

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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Take Down"
			},
			effect: {
				en: "Swinub does 10 damage to itself.",
				fr: "Marcacrin s'inflige 30 dégâts.",
				de: "Swinub does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	description: {
		fr: "S'il sent quelque chose d'alléchant, il se précipite vers la source de l'arôme."
	},

	thirdParty: {
		cardmarket: 274643
	}
}

export default card
