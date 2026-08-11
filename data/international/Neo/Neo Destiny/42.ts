import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee",
		'de-de': "Kicklee"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "One-Two Kick",
				'fr-fr': "Double mawashi geri",
				'de-de': "One-Two Kick"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],

			name: {
				'en-us': "Heel Drop",
				'fr-fr': "Koud'talon",
				'de-de': "Heel Drop"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},

			damage: 60
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It has a perfect sense of balance and can lash out with powerful kicks from any position.",
		'fr-fr': "Il a un sens parfait de l'équilibre et peut donner des coups puissants dans n'importe quelle position."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274694,
				tcgplayer: 86103
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274694,
				tcgplayer: 86103
			}
		}
	]
}

export default card
