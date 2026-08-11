import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'de-de': "Lahmus"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dual Armor",
				'fr-fr': "Double armure",
				'de-de': "Dual Armor"
			},
			effect: {
				'en-us': "As long as Slowbro has any Psychic Energy attached to it, Slowbro is both Water and Psychic type.",
				'fr-fr': "Tant que Flagadoss possède des Énergies , il est à la fois de type  et .",
				'de-de': "As long as Slowbro has any  Energy attached to it, Slowbro is both  and  type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Parallel Gain",
				'fr-fr': "Gain parallèle",
				'de-de': "Parallel Gain"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Pokémon (including Slowbro).",
				'fr-fr': "Retirez 1 marqueur de dégât à chacun de vos Pokémon (Flagadoss inclus).",
				'de-de': "Remove 1 damage counter from each of your Active Pokémon (including Slowbro)."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-boulé",
				'de-de': "Rolling Tackle"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89305,
				cardmarket: 276659
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89305,
				cardmarket: 276659
			},
		},
		{
			type: "normal",
		}
	],
}

export default card
