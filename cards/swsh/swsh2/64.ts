import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-64",

	localId: 64,

	name: {
		en: "Heliolisk",
	},

	tags: [
	],

	illustrator: "SATOSHI NAKAI",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Helioptile",
	},






	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Eerie Impulse",
			},

			text: {
				en: "Flip a coin. If heads, discard an Energy from 1 of your opponent’s Pokémon.",
			},


		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Thunder",
			},

			text: {
				en: "This Pokémon also does 30 damage to itself.",
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card