import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-40",

	localId: 40,

	name: {
		en: "Gulpin",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sachiko Adachi",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/40/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/40/high",
			},

	},


	// Card Pokémon Informations

	dexId: 316,



	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Endure",
			},

			text: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Gulpin would be Knocked Out by damage from an attack, Gulpin is not Knocked Out and its remaining HP becomes 10 instead.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Pound",
			},


			damage: 10,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "+10",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card