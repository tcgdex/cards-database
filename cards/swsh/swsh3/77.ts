import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-77",

	localId: 77,

	name: {
		en: "Golurk",
	},


	illustrator: "Anesaki Dynamic",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Golett",
	},



	hp: 150,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Dynamic Chop",
			},


			damage: 80,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Golurk Hammer",
			},


			damage: 180,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card