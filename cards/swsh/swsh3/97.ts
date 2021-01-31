import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-97",

	localId: 97,

	name: {
		en: "Passimian",
	},


	illustrator: "SATOSHI NAKAI",

	rarity: Rarity.COMMON, 

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
				en: "Call for Family",
			},

			text: {
				en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Rock Hurl",
			},

			text: {
				en: "This attack’s damage isn’t affected by Resistance.",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card