import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Decidueye",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Dartrix",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Deep Forest Camo",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent’s Pokémon V and Pokémon-GX.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Splitting Arrow",
			},
			effect: {
				en: "This attack also does 20 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 90,

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
