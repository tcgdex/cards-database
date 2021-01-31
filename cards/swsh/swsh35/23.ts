import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-23",

	localId: 23,

	name: {
		en: "Alcremie VMAX",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/23/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/23/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Alcremie V",
	},



	hp: 310,

	type: [
		Type.PSYCHIC,
	],



	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations
	effect: {
		en: "When your Pokémon VMAX is Knocked Out, your opponent takes 3 Prize cards.",
	},

}

export default card