import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-96",

	localId: 96,

	name: {
		en: "Diggersby",
	},


	illustrator: "0313",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Bunnelby",
	},



	hp: 130,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Hammer In",
			},


			damage: 90,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Land Crush",
			},


			damage: 140,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card