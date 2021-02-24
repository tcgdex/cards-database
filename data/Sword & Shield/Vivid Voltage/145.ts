import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Toucannon",
	},
	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Trumbeak",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Cutoff",
			},
			effect: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Loop Cannon",
			},
			effect: {
				en: "Put 2 Energy attached to this Pokémon into your hand.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 2,



}

export default card
