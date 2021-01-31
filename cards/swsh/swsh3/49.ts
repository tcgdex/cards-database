import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-49",

	localId: 49,

	name: {
		en: "Beartic",
	},


	illustrator: "Masakazu Fukuda",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Cubchoo",
	},



	hp: 140,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Slash",
			},


			damage: 40,

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Frozen Slice",
			},

			text: {
				en: "This Pokémon also does 50 damage to itself.",
			},

			damage: 150,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card