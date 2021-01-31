import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-125",

	localId: 125,

	name: {
		en: "Klink",
	},


	illustrator: "Kouki Saitou",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 60,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Call for Backup",
			},

			text: {
				en: "Search your deck for a Metal Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			},


		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card