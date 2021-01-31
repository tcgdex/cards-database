import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-1",

	localId: 1,

	name: {
		en: "Butterfree V",
	},


	illustrator: "Saki Hayashiro",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 190,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Dizzying Poison",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
			},


		},
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Blasting Wind",
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


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card