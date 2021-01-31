import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-69",

	localId: 69,

	name: {
		en: "Mew V",
	},


	illustrator: "PLANETA Mochizuki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 180,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
			],

			name: {
				en: "X Ball",
			},

			text: {
				en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			},

			damage: "30×",

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



	// Card Trainer/Energy informations

}

export default card