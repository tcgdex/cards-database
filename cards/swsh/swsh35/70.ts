import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-70",

	localId: 70,

	name: {
		en: "Gardevoir V",
	},


	illustrator: "PLANETA Mochizuki",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Magical Shot",
			},


			damage: 30,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Swelling Pulse",
			},

			text: {
				en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			},

			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card