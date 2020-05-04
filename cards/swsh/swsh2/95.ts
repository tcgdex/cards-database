import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-95",

	localId: 95,

	name: {
		en: "Galarian Sirfetch'd",
	},

	tags: [
	],

	illustrator: "You Iribi",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Farfetch'd",
	},






	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Pierce",
			},


			damage: 40,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Meteor Assault",
			},

			text: {
				en: "This Pokémon can't use Meteor Assault again until it leaves the Active Spot.",
			},

			damage: 180,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card