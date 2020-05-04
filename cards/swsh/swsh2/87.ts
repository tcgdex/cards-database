import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-87",

	localId: 87,

	name: {
		en: "Alcremie",
	},

	tags: [
	],

	illustrator: "Mizue",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Milcery",
	},






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Decorate",
			},

			text: {
				en: "Attach any number of basic Energy cards from your hand to your Pokémon in any way you like.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Draining Kiss",
			},

			text: {
				en: "Heal 30 damage from this Pokémon.",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card