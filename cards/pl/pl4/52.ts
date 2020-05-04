import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-52",

	localId: 52,

	name: {
		en: "Bagon",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/52/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/52/high",
			},

	},


	// Card Pokémon Informations

	dexId: 371,



	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Smash Kick",
			},


			damage: 10,

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Super Singe",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.COLORLESS, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card