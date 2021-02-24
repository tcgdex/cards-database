import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Grimmsnarl V",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 220,
	types: [
		"Darkness",
	],




	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
			},

			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Spiky Knuckle",
			},
			effect: {
				en: "Put 2 Darkness Energy attached to this Pokémon into your hand.",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
