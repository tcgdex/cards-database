import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Golisopod",
	},
	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wimpod",
	},



	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Times Slash",
			},
			effect: {
				en: "This attack does 50 more damage for each of your opponent’s Pokémon V and Pokémon-GX in play.",
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
