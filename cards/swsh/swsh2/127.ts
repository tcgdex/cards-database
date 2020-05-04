import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-127",

	localId: 127,

	name: {
		en: "Galarian Perrserker",
	},

	tags: [
	],

	illustrator: "Naoki Saito",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Meowth",
	},






	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Slash",
			},


			damage: 50,

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Claw Dagger",
			},

			text: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
			},

			damage: "80×",

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