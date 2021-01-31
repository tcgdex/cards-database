import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-46",

	localId: 46,

	name: {
		en: "Vanillish",
	},


	illustrator: "Shibuzoh.",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Vanillite",
	},



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
				en: "Freezing Headbutt",
			},

			text: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
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


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card