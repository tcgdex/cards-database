import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-35",

	localId: 35,

	name: {
		en: "Galarian Mr. Mime",
	},


	illustrator: "Misa Tsutsui",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 80,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Reflect",
			},

			text: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			},


		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Icy Snow",
			},


			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card