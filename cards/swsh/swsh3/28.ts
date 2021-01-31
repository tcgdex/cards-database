import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-28",

	localId: 28,

	name: {
		en: "Galarian Darmanitan",
	},


	illustrator: "Misa Tsutsui",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Darumaka",
	},



	hp: 140,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Headbutt",
			},


			damage: 40,

		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Frozen Heat",
			},

			text: {
				en: "You may discard all Water Energy from this Pokémon. If you do, this attack does 60 more damage.",
			},

			damage: "110+",

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