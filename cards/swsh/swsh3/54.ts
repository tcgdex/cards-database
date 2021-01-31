import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-54",

	localId: 54,

	name: {
		en: "Arctovish",
	},


	illustrator: "Shin Nagasawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Rare Fossil",
	},



	hp: 150,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Hard Face",
			},

			text: {
				en: "During your opponent’s next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance).",
			},

			damage: 90,

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Cold Breath",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
			},

			damage: 130,

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