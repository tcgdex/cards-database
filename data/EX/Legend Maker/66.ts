import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Tentacool",
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Poison Sting",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},

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
