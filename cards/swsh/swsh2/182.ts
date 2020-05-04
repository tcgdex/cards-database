import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-182",

	localId: 182,

	name: {
		en: "Toxtricity V",
	},

	tags: [
	],

	illustrator: "5ban Graphics",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Poison Jab",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Electric Riot",
			},

			text: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 90 more damage.",
			},

			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card