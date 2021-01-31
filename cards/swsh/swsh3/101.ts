import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-101",

	localId: 101,

	name: {
		en: "Muk",
	},


	illustrator: "Eri Yamaki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Grimer",
	},



	hp: 140,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Triple Poison",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned. During Pokémon Checkup, put 3 damage counters on that Pokémon instead of 1.",
			},


		},
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Sludge Whirlpool",
			},


			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card