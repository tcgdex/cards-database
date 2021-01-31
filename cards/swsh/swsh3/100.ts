import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-100",

	localId: 100,

	name: {
		en: "Grimer",
	},


	illustrator: "Ryota Murayama",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 80,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Stomp Off",
			},

			text: {
				en: "Discard the top card of your opponent’s deck.",
			},


		},
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Sludge Whirlpool",
			},


			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card