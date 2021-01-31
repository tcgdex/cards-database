import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-8",

	localId: 8,

	name: {
		en: "Incineroar V",
	},


	illustrator: "Kouki Saitou",

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
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Grand Flame",
			},

			text: {
				en: "Attach up to 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
			},

			damage: 90,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Flare Blitzer",
			},

			text: {
				en: "This Pokémon also does 30 damage to itself.",
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