import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-45",

	localId: 45,

	name: {
		en: "Vanillite",
	},


	illustrator: "Sanosuke Sakuma",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 60,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Ice Over",
			},

			text: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			},

			damage: 10,

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