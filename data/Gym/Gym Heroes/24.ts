import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Brock's Zubat",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		41,
	],
	hp: 30,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Alert",
			},
			effect: {
				en: "Draw a card. Then, switch Brock's Zubat with 1 of your Benched Pokémon. You can't use this attack if your Bench is empty.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
