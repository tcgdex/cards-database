import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Manectric",
	},
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
	},



	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Strafe",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Flash Impact",
			},
			effect: {
				en: "This attack also does 30 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
