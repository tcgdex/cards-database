import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-13",

	localId: 13,

	name: {
		en: "Wailord V",
	},


	illustrator: "PLANETA Mochizuki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 280,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Draw Up",
			},

			text: {
				en: "Attach up to 3 Water Energy cards from your discard pile to this Pokémon.",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.WATER,
				Type.WATER,
			],

			name: {
				en: "Ocean Waves",
			},

			text: {
				en: "Flip 3 coins. This attack does 120 damage for each heads.",
			},

			damage: "120×",

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card