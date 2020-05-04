import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-20",

	localId: 20,

	name: {
		en: "Hariyama",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/20/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/20/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Makuhita",
	},

	dexId: 297,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Push Out",
			},

			text: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			},

			damage: 50,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Vortex Chop",
			},

			text: {
				en: "If the Defending Pokémon has any Resistance, this attack's base damage is 120 instead of 60.",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "+30",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card