import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-82",

	localId: 82,

	name: {
		en: "Zacian",
	},


	illustrator: "Shin Nagasawa",

	rarity: Rarity.AMAZING, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 110,

	type: [
		Type.PSYCHIC,
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
				Type.GRASS,
				Type.PSYCHIC,
				Type.METAL,
			],

			name: {
				en: "Amazing Sword",
			},

			text: {
				en: "If your opponent has any Pokémon VMAX in play, this attack does 150 more damage.",
			},

			damage: "150+",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card