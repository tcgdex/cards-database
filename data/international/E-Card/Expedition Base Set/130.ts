import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Spearow",
		fr: "Piafabec",
		de: "Habitak"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	trainerType: "Supporter",
	set: Set,

	dexId: [21],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Razor Wind",
				fr: "Coupe-vent",
				de: "Klingensturm"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 20,
		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89438,
				cardmarket: 275005
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89438,
				cardmarket: 275005
			},
		},
	],
}

export default card
