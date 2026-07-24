import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
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
		en: "Koffing",
		fr: "Smogo"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Poison Resistance",
			},
			effect: {
				en: "Scizor can't be Poisoned.",
			},
		},
	],,
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Foul Gas",
				fr: "Gaz infect",
				de: "Foul Gas"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Confus.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Misfire",
				fr: "Raté",
				de: "Misfire"
			},
			effect: {
				en: "Flip a coin. If tails, put 6 damage counters on Weezing.",
				fr: "Lancez une pièce. Si c'est face, placez 6 marqueurs de dégâts sur Smogogo.",
				de: "Flip a coin. If tails, put 6 damage counters on Weezing."
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
