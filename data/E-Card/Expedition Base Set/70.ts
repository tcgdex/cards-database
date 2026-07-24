import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [170],

	hp: 50,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Float",
				fr: "Gaz infect",
				de: "Foul Gas"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Chinchou.",
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
				en: "Headbutt",
				fr: "Raté",
				de: "Misfire"
			},
			effect: {
				en: "Flip a coin. If tails, put 6 damage counters on Weezing.",
				fr: "Lancez une pièce. Si c'est face, placez 6 marqueurs de dégâts sur Smogogo.",
				de: "Flip a coin. If tails, put 6 damage counters on Weezing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90559,
				cardmarket: 274907
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
