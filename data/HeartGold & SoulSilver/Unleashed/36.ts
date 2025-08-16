import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
		de: "Plusle"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

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
				en: "Collect",
				fr: "Collectionner",
				de: "Sammeln"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				de: "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre",
				de: "Donnerrüttler"
			},
			effect: {
				en: "Flip a coin. If tails, Plusle does 10 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, Posipi s’inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei \"Zahl\" fügt Plusle sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279192,
		tcgplayer: 88171
	}
}

export default card
