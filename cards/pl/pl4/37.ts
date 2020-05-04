import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-37",

	localId: 37,

	name: {
		en: "Graveler",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sachiko Adachi",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/37/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/37/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Geodude",
	},

	dexId: 75,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Tackle",
			},


			damage: 30,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Double-edge",
			},

			text: {
				en: "Graveler does 10 damage to itself.",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.LIGHTNING, 

			value: "-20",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card