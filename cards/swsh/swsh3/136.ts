import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-136",

	localId: 136,

	name: {
		en: "Furret",
	},


	illustrator: "tetsuya koizumi",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Sentret",
	},



	hp: 110,

	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Feelin’ Fine",
			},

			text: {
				en: "Draw 3 cards.",
			},


		},
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Tail Smash",
			},

			text: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},

			damage: 90,

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