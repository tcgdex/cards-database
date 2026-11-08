import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'de-de': "Smogmog"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [110],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Poison Resistance",
			},
			effect: {
				'en-us': "Scizor can't be Poisoned.",
			},
		},
	],
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Foul Gas",
				'fr-fr': "Gaz infect",
				'de-de': "Foul Gas"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Misfire",
				'fr-fr': "Raté",
				'de-de': "Misfire"
			},
			effect: {
				'en-us': "Flip a coin. If tails, put 6 damage counters on Weezing.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 6 marqueurs de dégâts sur Smogogo.",
				'de-de': "Flip a coin. If tails, put 6 damage counters on Weezing."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90557,
				cardmarket: 274907
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90557,
				cardmarket: 274907
			},
		},
	],
}

export default card
