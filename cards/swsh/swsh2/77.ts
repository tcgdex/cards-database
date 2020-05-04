import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-77",

	localId: 77,

	name: {
		en: "Xatu",
	},

	tags: [
	],

	illustrator: "so-taro",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Natu",
	},






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Energy Warp",
			},

			text: {
				en: "Move an Energy from 1 of your opponent's Benched Pokémon to their Active Pokémon.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Psychic",
			},

			text: {
				en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			},

			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card