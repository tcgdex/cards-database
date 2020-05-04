import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-68",

	localId: 68,

	name: {
		en: "Makuhita",
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
				en: "https://assets.tcgdex.net/en/pl/pl4/68/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/68/high",
			},

	},


	// Card Pokémon Informations

	dexId: 296,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Sand Attack",
			},

			text: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			},


		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Magnum Punch",
			},


			damage: 30,

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