import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Metagross",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 170,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitation Field",
			},
			effect: {
				en: "Your Pokémon in play have no Retreat Cost.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leg Quake",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolution Pokémon, it can’t attack during your opponent’s next turn.",
			},
			damage: 100,

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
