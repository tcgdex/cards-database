import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-19",

	localId: 19,

	name: {
		en: "Charizard V",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 220,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Claw Slash",
			},


			damage: 80,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Fire Spin",
			},

			text: {
				en: "Discard 2 Energy from this Pokémon.",
			},

			damage: 220,

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