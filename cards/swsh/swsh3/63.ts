import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-63",

	localId: 63,

	name: {
		en: "Toxtricity",
	},


	illustrator: "Shin Nagasawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Toxel",
	},



	hp: 120,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Risk Taker",
			},

			text: {
				en: "Flip a coin. If heads, discard the top 5 cards of your opponent’s deck. If tails, discard the top 5 cards of your deck.",
			},


		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Thunder Jolt",
			},

			text: {
				en: "This Pokémon also does 30 damage to itself.",
			},

			damage: 160,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card