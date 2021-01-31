import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-4",

	localId: 4,

	name: {
		en: "Parasect",
	},


	illustrator: "Miki Tanaka",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Paras",
	},



	hp: 120,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Mushroom Tackle",
			},

			text: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Solar Beam",
			},


			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card