import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-122",

	localId: 122,

	name: {
		en: "Lairon",
	},


	illustrator: "Mizue",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Aron",
	},



	hp: 100,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Knock Away",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
			},

			damage: "30+",

		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Lunge Out",
			},


			damage: 50,

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

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card