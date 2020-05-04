import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-55",

	localId: 55,

	name: {
		en: "Buneary",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/55/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/55/high",
			},

	},


	// Card Pokémon Informations

	dexId: 427,



	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Bunny Hop",
			},

			text: {
				en: "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+10",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card