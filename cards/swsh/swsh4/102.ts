import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-102",

	localId: 102,

	name: {
		en: "Zamazenta",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.AMAZING, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 110,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Metal Armament",
			},

			text: {
				en: "Attach a basic Energy card from your discard pile to this Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.FIGHTING,
				Type.METAL,
			],

			name: {
				en: "Amazing Shield",
			},

			text: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
			},

			damage: 180,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card