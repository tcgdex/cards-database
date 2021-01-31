import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-79",

	localId: 79,

	name: {
		en: "Morelull",
	},


	illustrator: "Suwama Chiaki",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 60,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Spore",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Flop",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card