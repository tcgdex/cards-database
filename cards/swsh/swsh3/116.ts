import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-116",

	localId: 116,

	name: {
		en: "Eternatus V",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 220,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Power Accelerator",
			},

			text: {
				en: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Dynamax Cannon",
			},

			text: {
				en: "If your opponent’s Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			},

			damage: "120+",

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