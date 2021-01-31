import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-109",

	localId: 109,

	name: {
		en: "Zweilous",
	},


	illustrator: "tetsuya koizumi",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Deino",
	},



	hp: 100,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Corkscrew Punch",
			},


			damage: 30,

		},
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Darkness Fang",
			},


			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card