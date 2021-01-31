import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-33",

	localId: 33,

	name: {
		en: "Centiskorch V",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Radiating Heat",
			},

			text: {
				en: "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent’s Active Pokémon.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.FIRE,
				Type.FIRE,
			],

			name: {
				en: "Burning Train",
			},


			damage: 180,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card