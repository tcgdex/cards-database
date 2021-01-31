import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-74",

	localId: 74,

	name: {
		en: "Gothorita",
	},


	illustrator: "sowsow",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Gothita",
	},



	hp: 80,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Whiny Voice",
			},

			text: {
				en: "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Double Spin",
			},

			text: {
				en: "Flip 2 coins. This attack does 30 damage for each heads.",
			},

			damage: "30×",

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

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card