import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Phione",
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		489,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pull Out",
			},
			effect: {
				en: "Put a card from your discard pile on top of your deck.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aqua Boomerang",
			},
			effect: {
				en: "Return this Pokémon and all cards attached to it to your hand.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1
}

export default card
