import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-30",

	localId: 30,

	name: {
		en: "Volcarona",
	},


	illustrator: "NC Empire",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Larvesta",
	},



	hp: 120,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Cauterize",
			},

			text: {
				en: "If your opponent’s Active Pokémon has no damage counters on it before this attack does damage, this attack does nothing.",
			},

			damage: 80,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Fire Wing",
			},


			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card