import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-11",

	localId: 11,

	name: {
		en: "Masquerain",
	},

	tags: [
	],

	illustrator: "chibi",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Surskit",
	},






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Threatening Pattern",
			},

			text: {
				en: "During your opponent’s next turn, Energy can’t be attached from your opponent's hand to the Defending Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "U-turn",
			},

			text: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card