import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Ledyba δ",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		165,
	],
	hp: 40,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Supersonic",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
