import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Charizard",
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Battle Sense",
			},
			effect: {
				en: "Once during your turn, you may look at the top 3 cards of your deck and put 1 of them into your hand. Discard the other cards.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Royal Blaze",
			},
			effect: {
				en: "This attack does 50 more damage for each Leon card in your discard pile.",
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
