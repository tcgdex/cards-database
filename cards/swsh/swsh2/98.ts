import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-98",

	localId: 98,

	name: {
		en: "Medicham",
	},

	tags: [
	],

	illustrator: "Suwama Chiaki",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Meditite",
	},






	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Yoga Kick",
			},

			text: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
			},

			damage: 40,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Psychic",
			},

			text: {
				en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
			},

			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card