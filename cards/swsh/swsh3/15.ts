import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-15",

	localId: 15,

	name: {
		en: "Steenee",
	},


	illustrator: "sui",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Bounsweet",
	},



	hp: 80,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Captivate",
			},

			text: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			},


		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Smack",
			},


			damage: 40,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card