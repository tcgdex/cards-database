import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-45",

	localId: 45,

	name: {
		en: "Malamar",
	},


	illustrator: "kawayoo",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Inkay",
	},



	hp: 120,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Eerie Wave",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},

			damage: 50,

		},
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Random Peck",
			},

			text: {
				en: "Flip 2 coins. This attack does 40 more damage for each heads.",
			},

			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card