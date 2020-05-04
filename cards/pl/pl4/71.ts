import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-71",

	localId: 71,

	name: {
		en: "Pikachu",
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
				en: "https://assets.tcgdex.net/en/pl/pl4/71/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/71/high",
			},

	},


	// Card Pokémon Informations

	dexId: 25,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Pika Ball",
			},


			damage: 10,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Mega Shot",
			},

			text: {
				en: "Discard all Lightning Energy attached to Pikachu and then choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.METAL, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card