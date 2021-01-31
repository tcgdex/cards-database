import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-138",

	localId: 138,

	name: {
		en: "Rayquaza",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.AMAZING, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 120,

	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.LIGHTNING,
				Type.FIGHTING,
			],

			name: {
				en: "Amazing Burst",
			},

			text: {
				en: "Discard all basic Energy from this Pokémon. This attack does 80 damage for each type of basic Energy you discarded in this way.",
			},

			damage: "80×",

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card