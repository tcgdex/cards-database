import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Hitmonlee",
		fr: "Kicklee",
		de: "Kicklee"
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
				en: "One-Two Kick",
				fr: "Double mawashi geri",
				de: "One-Two Kick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 20 damage times the number of heads."
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
				en: "Heel Drop",
				fr: "Koud'talon",
				de: "Heel Drop"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Flip a coin. If tails, this attack does nothing."
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

	description: {
		fr: "Il a un sens parfait de l'équilibre et peut donner des coups puissants dans n'importe quelle position."
	},

	thirdParty: {
		cardmarket: 274694,
		tcgplayer: 86103
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
