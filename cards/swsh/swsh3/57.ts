import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-57",

	localId: 57,

	name: {
		en: "Ampharos",
	},


	illustrator: "kodama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Flaaffy",
	},



	hp: 150,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Dazzle Blast",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},

			damage: 50,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
			],

			name: {
				en: "Electric Ball",
			},


			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card