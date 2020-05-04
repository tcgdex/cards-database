import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-60",

	localId: 60,

	name: {
		en: "Shinx",
	},

	tags: [
	],

	illustrator: "Uta",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Under Pressure",
			},

			text: {
				en: "If your opponent has 3 or fewer Prize cards remaining, this attack does 50 more damage.",
			},

			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card