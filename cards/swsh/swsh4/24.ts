import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-24",

	localId: 24,

	name: {
		en: "Charmeleon",
	},

	tags: [
	],

	illustrator: "SATOSHI NAKAI",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Charmander",
	},



	hp: 90,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Slash",
			},


			damage: 20,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
			],

			name: {
				en: "Raging Flames",
			},

			text: {
				en: "Discard the top 3 cards of your deck.",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card