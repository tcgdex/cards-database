import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Grimmsnarl VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 330,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Grimmsnarl V",
	},



	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "G-Max Drill",
			},
			effect: {
				en: "This attack does 50 more damage for each extra Darkness Energy attached to this Pokémon (in addition to this attack’s cost). You can’t add more than 100 damage in this way.",
			},
			damage: "170+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
