import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-138",

	localId: 138,

	name: {
		en: "Duraludon",
	},

	tags: [
	],

	illustrator: "Shin Nagasawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Metal Sharpener",
			},

			text: {
				en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Power Beam",
			},


			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card