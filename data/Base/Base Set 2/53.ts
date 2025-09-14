import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Nidorina",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		30,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nidoran♀",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Supersonic",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Kick",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 273976,
		tcgplayer: 42516
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
