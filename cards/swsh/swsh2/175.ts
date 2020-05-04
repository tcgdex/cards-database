import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-175",

	localId: 175,

	name: {
		en: "Rillaboom V",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Forest Feast",
			},

			text: {
				en: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Wood Hammer",
			},

			text: {
				en: "This Pokémon also does 30 damage to itself.",
			},

			damage: 220,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card