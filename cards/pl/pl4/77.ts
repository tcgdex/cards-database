import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-77",

	localId: 77,

	name: {
		en: "Tangela",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/77/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/77/high",
			},

	},


	// Card Pokémon Informations

	dexId: 114,



	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Collect",
			},

			text: {
				en: "Draw a card.",
			},


		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Stun Spore",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.WATER, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card