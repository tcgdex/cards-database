import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-76",

	localId: 76,

	name: {
		en: "Whimsicott",
	},

	tags: [
	],

	illustrator: "Naoyo Kimura",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Cottonee",
	},



	hp: 90,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Triple Draw",
			},

			text: {
				en: "Draw 3 cards.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Flying Fury",
			},

			text: {
				en: "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
			},

			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],




	// Card Trainer/Energy informations

}

export default card