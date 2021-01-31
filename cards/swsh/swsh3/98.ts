import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-98",

	localId: 98,

	name: {
		en: "Galarian Sirfetch’d",
	},


	illustrator: "Ryota Murayama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Farfetch’d",
	},



	hp: 130,

	type: [
		Type.FIGHTING,
	],


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
				en: "This Pokémon can’t use Meteor Assault again until it leaves the Active Spot.",
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