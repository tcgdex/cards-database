import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Slowking",
	},
	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bursting Hand",
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 10 damage times the number of Energy cards there.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shuffle Attack",
			},
			effect: {
				en: "Look at a number of cards on top of your opponent's deck equal to the number of Energy cards attached to the Defending Pokémon. Put those cards in any order, and then put them back on top of your opponent's deck.",
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





}

export default card
