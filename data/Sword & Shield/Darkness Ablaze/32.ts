import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Talonflame",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Fletchinder",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Scorching Feathers",
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent’s Pokémon (even if this Pokémon is Knocked Out), the Attacking Pokémon is now Burned.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Flight",
			},
			effect: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},
			damage: 120,

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
	retreat: 1,



}

export default card
