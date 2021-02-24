import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Keldeo-EX",
	},
	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rush In",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
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
				en: "Secret Sword",
			},
			effect: {
				en: "Does 20 more damage for each Water Energy attached to this Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
