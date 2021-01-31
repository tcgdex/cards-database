import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-95",

	localId: 95,

	name: {
		en: "Rhyperior V",
	},


	illustrator: "Eske Yoshinob",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 230,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Drill Run",
			},

			text: {
				en: "Discard an Energy from your opponent’s Active Pokémon.",
			},

			damage: 80,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Heavy Rock Artillery",
			},

			text: {
				en: "During your next turn, this Pokémon can’t use Heavy Rock Artillery.",
			},

			damage: 210,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card