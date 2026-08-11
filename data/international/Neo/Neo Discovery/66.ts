import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Tyrogue",
		'fr-fr': "Débugant",
		'de-de': "Rabauz"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		236,
	],

	hp: 30,

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
				'en-us': "Smash Punch",
				'fr-fr': "Boxe",
				'de-de': "Schmetterschlag"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

			damage: 30
		},
	],

	description: {
		'en-us': "It is always bursting with energy. To make itself stronger, it keeps on fighting even if it loses.",
		'fr-fr': "Il déborde toujours d'énergie. Pour devenir plus fort, il continue de se battre même s'il perd."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274577,
				tcgplayer: 90128
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274577,
				tcgplayer: 90128
			}
		}
	]
}

export default card

