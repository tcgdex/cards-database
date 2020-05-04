import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-137",

	localId: 137,

	name: {
		en: "Copperajah VMAX",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Copperajah V",
	},






	attacks: [
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Dangerous Nose",
			},

			text: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, this attack does 100 more damage.",
			},

			damage: "100+",

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "G-Max Hammer",
			},


			damage: 240,

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

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card