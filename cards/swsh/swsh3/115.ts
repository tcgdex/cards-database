import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-115",

	localId: 115,

	name: {
		en: "Grimmsnarl VMAX",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Grimmsnarl V",
	},



	hp: 330,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
				Type.DARKNESS,
			],

			name: {
				en: "G-Max Drill",
			},

			text: {
				en: "This attack does 50 more damage for each extra Darkness Energy attached to this Pokémon (in addition to this attack’s cost). You can’t add more than 100 damage in this way.",
			},

			damage: "170+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card