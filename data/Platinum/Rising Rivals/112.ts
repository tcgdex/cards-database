import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu Niv. 12",
		de: "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
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
				fr: "Ronge",
				de: "Nagen"
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
				fr: "Secousse tonnerre",
				de: "Donnerrüttler"
			},
			effect: {
				en: "Flip a coin. If tails, Pikachu does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Pikachu s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei \"Zahl\" fügt Pikachu sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278686,
		tcgplayer: 88091
	}
}

export default card
