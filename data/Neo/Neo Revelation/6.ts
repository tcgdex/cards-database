import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Entei",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Howl",
			},
			effect: {
				en: "When you play Entei from your hand, you may discard the top 5 cards from your deck. (if you have fewer cards in your deck than that, discard all of them.) If any of those are Fire Energy cards, attach them to any of your Fire Pokémon of your choice. Using this power ends your turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Searing Flames",
			},
			effect: {
				en: "Discard 2 Energy cards attached to Entei or this attack does nothing.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
