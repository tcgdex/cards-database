import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Aegislash",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Doublade",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Big Shield",
			},
			effect: {
				en: "All of your Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Big Shield Ability at a time.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Edge",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
