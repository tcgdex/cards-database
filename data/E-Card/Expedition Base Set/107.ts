import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		de: "Dratini"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [147],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
			],

			name: {
				en: "Dragon Smash",
				fr: "Coup du dragon",
				de: "Drachenschmetterschlag"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84931,
				cardmarket: 274982
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84931,
				cardmarket: 274982
			},
		},
	],
}

export default card
