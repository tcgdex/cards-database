import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [212],

	hp: 80,

	types: [
		"Metal"
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
				en: "Snatch",
				fr: "Gaz infect",
				de: "Foul Gas"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon with no damage counters on it and switch the Defending Pokémon with it.",
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
				en: "Heavy Metal",
				fr: "Raté",
				de: "Misfire"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Metal Energy attached to Scizor. This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez une pièce. Si c'est face, placez 6 marqueurs de dégâts sur Smogogo.",
				de: "Flip a coin. If tails, put 6 damage counters on Weezing."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		}
	],
}

export default card
