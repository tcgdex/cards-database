import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Empoleon",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Prinplup",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Diving Draw",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Attack Command",
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
