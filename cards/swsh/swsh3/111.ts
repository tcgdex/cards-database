import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-111",

	localId: 111,

	name: {
		en: "Hoopa",
	},


	illustrator: "so-taro",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 120,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Assault Gate",
			},

			text: {
				en: "If this Pokémon didn’t move from the Bench to the Active Spot this turn, this attack does nothing. This attack’s damage isn’t affected by Weakness.",
			},

			damage: 90,

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