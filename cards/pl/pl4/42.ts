import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-42",

	localId: 42,

	name: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/42/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/42/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Gastly",
	},

	dexId: 93,



	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Psyshot",
			},


			damage: 20,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Shadow Bind",
			},

			text: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.COLORLESS, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card