import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-25",

	localId: 25,

	name: {
		en: "Heatran",
	},


	illustrator: "Anesaki Dynamic",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 130,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Fire Fang",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Raging Flare",
			},

			text: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			},

			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card