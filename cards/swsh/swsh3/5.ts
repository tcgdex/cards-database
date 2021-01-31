import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-5",

	localId: 5,

	name: {
		en: "Carnivine",
	},


	illustrator: "Masakazu Fukuda",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 90,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Return",
			},

			text: {
				en: "You may draw cards until you have 5 cards in your hand.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Giga Drain",
			},

			text: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent’s Active Pokémon.",
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