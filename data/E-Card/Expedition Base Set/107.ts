import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Sentret",
		fr: "Minidraco",
		de: "Dratini"
	},

	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [161],

	hp: 50,

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
				en: "Spy",
				fr: "Coup du dragon",
				de: "Drachenschmetterschlag"
			},

			effect: {
				en: "Look at the top 3 cards of your opponent's deck. Put them back in the same order.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 40
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
		}
	],
}

export default card
