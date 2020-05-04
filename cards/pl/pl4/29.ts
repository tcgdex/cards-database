import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-29",

	localId: 29,

	name: {
		en: "Raticate",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/29/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/29/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Rattata",
	},

	dexId: 20,



	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Recruit",
			},

			text: {
				en: "Look at your opponent's hand, choose a Supporter card you find there, and discard it. Then, use the effect of that card as the effect of this attack.",
			},


		},
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Extend Fang",
			},

			text: {
				en: "If Raticate has a Pokémon Tool card attached to it, this attack does 20 damage plus 40 more damage.",
			},

			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+20",

		},
	],




	// Card Trainer/Energy informations

}

export default card