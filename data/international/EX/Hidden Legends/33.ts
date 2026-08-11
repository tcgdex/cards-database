import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Dodrio",
		'fr-fr': "Dodrio",
		'de-de': "Dodri"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [85],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Doduo",
		'fr-fr': "Doduo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fast Feet",
				'fr-fr': "Fugafacile",
				'de-de': "Fast Feet"
			},
			effect: {
				'en-us': "Dodrio can retreat even when it is Asleep or Paralyzed.",
				'fr-fr': "Dodrio peut battre en retraite même s'il est Endormi ou Paralysé.",
				'de-de': "Dodrio can retreat even when it is Asleep or Paralyzed."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Retaliate",
				'fr-fr': "Représailles",
				'de-de': "Retaliate"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Dodrio.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Dodrio.",
				'de-de': "Does 10 damage times the number of damage counters on Dodrio."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup déchirant",
				'de-de': "Slashing Strike"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Dodrio ne peut pas utiliser Coup déchirant lors de votre prochain tour.",
				'de-de': "Flip a coin. If tails, Dodrio can't use Slashing Strike during your next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84849,
				cardmarket: 276107
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84849,
				cardmarket: 276107
			}
		},
	]
}

export default card
