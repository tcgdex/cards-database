import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Raikou ex",
		fr: "Raikou ex",
		de: "Raikou ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Dazzle Blast",
				fr: "Explosion de lumière",
				de: "Dazzle Blast"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Tackle",
				fr: "Charge éclair",
				de: "Lightning Tackle"
			},
			effect: {
				en: "Flip a coin. If tails, Raikou ex does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Raikou ex s'inflige 20 dégâts.",
				de: "Flip a coin. If tails, Raikou ex does 20 damage to itself."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276069,
		tcgplayer: 88540
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
