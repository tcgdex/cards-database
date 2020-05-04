import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-25",

	localId: 25,

	name: {
		en: "Ninetales",
	},

	tags: [
	],

	illustrator: "AKIRA EGAWA",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Vulpix",
	},






	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Hex",
			},

			text: {
				en: "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 90 more damage.",
			},

			damage: "30+",

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Flickering Flames",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card