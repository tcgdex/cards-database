import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Meganium",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		154,
	],
	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Bayleef",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ultra Powder",
			},
			effect: {
				en: "Flip 3 coins. If the first coin is heads, the Defending Pokémon is now Poisoned. If the second coin is heads, the Defending Pokémon is now Burned. If the third coin is heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fire Counterattack",
			},
			effect: {
				en: "If your opponent has any Fire Pokémon in play, this attack does 60 damage plus 30 more damage.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],




}

export default card
