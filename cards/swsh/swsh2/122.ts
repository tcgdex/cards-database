import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-122",

	localId: 122,

	name: {
		en: "Malamar VMAX",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Malamar V",
	},






	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Max Jammer",
			},

			text: {
				en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
			},

			damage: 180,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card