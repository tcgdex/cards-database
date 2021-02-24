import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Whiscash",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,



	evolveFrom: {
		en: "Barboach",
	},


	abilities: [
		{
			type: "Ability",
			name: {
				en: "Submerge",
			},
			effect: {
				en: "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent’s).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Earthquake",
			},
			effect: {
				en: "This attack also does 20 damage to each of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 140,

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
