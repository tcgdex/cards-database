import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-80",

	localId: 80,

	name: {
		en: "Wingull",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kyoko Umemoto",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/80/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/80/high",
			},

	},


	// Card Pokémon Informations

	dexId: 278,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Glide",
			},


			damage: 10,

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Slashing Strike",
			},

			text: {
				en: "During your next turn, Wingull can't use Slashing Strike.",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card