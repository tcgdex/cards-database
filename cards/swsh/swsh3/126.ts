import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-126",

	localId: 126,

	name: {
		en: "Klang",
	},


	illustrator: "NC Empire",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Klink",
	},



	hp: 90,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Call for Backup",
			},

			text: {
				en: "Search your deck for a Metal Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Spinning Attack",
			},


			damage: 60,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card