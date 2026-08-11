import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi",
		'de-de': "Plusle"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [311],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse tonnerre",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Plusle does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c’est pile, Posipi s’inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" fügt Plusle sich selbst 10 Schadenspunkte zu."
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
		'en-us': "It absorbs electricity from telephone poles. It shorts out its body to create crackling noises."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88171,
				cardmarket: 279192
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88171,
				cardmarket: 279192
			}
		},
	],

}

export default card
