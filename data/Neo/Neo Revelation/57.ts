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
				de: "Bodycheck"
			},
			effect: {
				en: "Swinub does 10 damage to itself.",
				fr: "Marcacrin s'inflige 30 dégâts.",
				de: "Quiekel fügt sich selber 10 Schadenspunkte zu."
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
	retreat: 1,


	description: {
		en: "If it smells something enticing, it dashes headlong off to find the source of the aroma.",
		fr: "S'il sent quelque chose d'alléchant, il se précipite vers la source de l'arôme.",
		de: "Wenn es etwas Verlockendes riecht, rennt es halsüberkopf los, um herauszufinden, wo der Geruch herkommt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274643,
				tcgplayer: 89697
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274643,
				tcgplayer: 89697
			}
		}
	]
}

export default card

