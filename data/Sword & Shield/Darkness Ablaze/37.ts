import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Suicune",
	},
	illustrator: "so-taro",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 120,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Loop",
			},
			effect: {
				en: "Put 2 Water Energy attached to this Pokémon into your hand.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
