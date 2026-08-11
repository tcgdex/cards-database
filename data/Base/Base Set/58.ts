import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		it: "Pikachu"
	},

	illustrator: "Mitsuhiro Arita",
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
				fr: "Rogne",
				de: "Nagen",
				it: "Rosicchiamento"
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
				fr: "Secousse Tonnerre",
				de: "Donnerschock",
				it: "Scoppiotuono"
			},
			effect: {
				en: "Flip a coin. If tails, Pikachu does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Pikachu s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei \"Zahl\" fügt Pikachu sich selbst 10 Schadenspunkte zu.",
				it: "Lancia una moneta. Se esce croce, Pikachu si infligge 10 danni.",
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


	description: {
		en: "When several of these Pokémon gather, their electricity can cause lightning storms.",
		fr: "Quand plusieurs de ces Pokémon se réunissent, ils provoquent de gigantesques orages.",
		it: "Quando diversi Pokémon di questo tipo si riuniscono, generano tanta energia elettrica da scatenare delle tempeste di fulmini. LIV 12 N.25"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273753,
				tcgplayer: 42402
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107055
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107055
			},
		},
		{
			type: "normal",
			subtype: "shadowless-red-cheek",
			thirdParty: {
				tcgplayer: 147229
			},
		},
		{
			type: "normal",
			subtype: "shadowless-red-cheek",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 147229
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
