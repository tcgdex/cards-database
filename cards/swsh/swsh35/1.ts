import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-1",

	localId: 1,

	name: {
		en: "Venusaur V",
	},


	illustrator: "PLANETA Mochizuki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 220,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Pollen Bomb",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
			},

			damage: 80,

		},
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Solar Typhoon",
			},

			text: {
				en: "During your next turn, this Pokémon can’t use Solar Typhoon.",
			},

			damage: 220,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card