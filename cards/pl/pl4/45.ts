import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-45",

	localId: 45,

	name: {
		en: "Pelipper",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/45/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/45/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Wingull",
	},

	dexId: 279,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Water Ball",
			},

			text: {
				en: "Does 20 damage plus 10 more damage for each Water Energy attached to Pelipper.",
			},

			damage: "20+",

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Wing Attack",
			},


			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-20",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card