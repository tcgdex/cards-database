import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-21",

	localId: 21,

	name: {
		en: "Houndoom V",
	},


	illustrator: "Ayaka Yoshida",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.FIRE,
	],


	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Searing Flame",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Burned.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.FIRE,
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Vengeful Flame",
			},

			text: {
				en: "If your Benched Fire Pokémon have any damage counters on them, this attack does 100 more damage.",
			},

			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card