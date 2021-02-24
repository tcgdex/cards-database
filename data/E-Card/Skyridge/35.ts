import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Xatu",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		178,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Natu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Synchronicity",
			},
			effect: {
				en: "You may attach any Technical Machine to Xatu.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Warp Hole",
			},
			effect: {
				en: "Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.",
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





}

export default card
