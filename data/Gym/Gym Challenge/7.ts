import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Nidoking",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidorino",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Intimidate",
			},
			effect: {
				en: "If the Defending Pokémon's maximum HP is 50 or less, it can't attack Giovanni's Nidoking during your opponent's next turn. (Benching or evolving either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Tumbling Attack",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage; if tails, this attack does 40 damage.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274275,
		tcgplayer: 85718
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
	]
}

export default card
