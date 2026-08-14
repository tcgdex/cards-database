import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Staravia",
		fr: "Étourvol",
		es: "Staravia",
		it: "Staravia",
		pt: "Staravia",
		de: "Staravia"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		397,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Starly",
		fr: "Étourmi",
		de: "Staralili"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
				de: "Wirf 1 Münze. Bei „Zahl“ fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily.",
		de: "Staravia verbergen ihre Schwäche in Gruppen. Sind sie allein, kann man sie an ihren lauten Rufen erkennen."
	},

	thirdParty: {
		cardmarket: 280974,
		tcgplayer: 89518
	}
}

export default card
