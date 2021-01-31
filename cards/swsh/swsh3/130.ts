import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-130",

	localId: 130,

	name: {
		en: "Melmetal",
	},


	illustrator: "NC Empire",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Meltan",
	},



	hp: 150,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Energy Link",
			},

			text: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Heavy Impact",
			},


			damage: 130,

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

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card