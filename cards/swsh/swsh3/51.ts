import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-51",

	localId: 51,

	name: {
		en: "Mareanie",
	},


	illustrator: "Tomokazu Komiya",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 70,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Regeneration",
			},

			text: {
				en: "Heal 30 damage from this Pokémon.",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Poison Tentacles",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card