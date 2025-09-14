import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Erika's Clefairy",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Cleffa",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Moonwatching",
			},
			effect: {
				en: "Search your deck for a basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Comet Slap",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
			},
			damage: 10,

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
			type: "Psychic",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274161,
		tcgplayer: 85288
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

