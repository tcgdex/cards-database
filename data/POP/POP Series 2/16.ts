import { Card } from '../../../interfaces'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Rogne"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre"
			},
			effect: {
				en: "Flip a coin. If tails, Pikachu does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Pikachu s'inflige 10 dégâts."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277447,
		tcgplayer: 88081
	}
}

export default card
