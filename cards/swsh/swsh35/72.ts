import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-72",

	localId: 72,

	name: {
		en: "Grapploct V",
	},

	tags: [
	],

	illustrator: "PLANETA Igarashi",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/72/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/72/high",
			},

	},


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.FIGHTING,
	],



	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations
	effect: {
		en: "When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards.",
	},

}

export default card