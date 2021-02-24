import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Wailord",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 200,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wailmer",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Veil",
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to this Pokémon, it recovers from all Special Conditions.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
			},
			effect: {
				en: "This attack does 40 more damage for each Water Energy attached to this Pokémon.",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
