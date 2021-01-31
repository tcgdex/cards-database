import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-36",

	localId: 36,

	name: {
		en: "Galarian Linoone",
	},

	tags: [
	],

	illustrator: "Akira Komayama",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/36/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/36/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Galarian Zigzagoon",
	},



	hp: 100,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Double-Edge",
			},

			text: {
				en: "This Pokémon also does 20 damage to itself.",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card