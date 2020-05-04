import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-116",

	localId: 116,

	name: {
		en: "Spiritomb",
	},

	tags: [
	],

	illustrator: "Tomokazu Komiya",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Splitting Spite",
			},

			text: {
				en: "Discard the top card of each player’s deck.",
			},


		},
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Dripping Grudge",
			},

			text: {
				en: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile.",
			},


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