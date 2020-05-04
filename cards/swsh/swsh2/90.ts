import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-90",

	localId: 90,

	name: {
		en: "Drakloak",
	},

	tags: [
	],

	illustrator: "Kouki Saitou",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Dreepy",
	},






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Summon",
			},

			text: {
				en: "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
			],

			name: {
				en: "Bite",
			},


			damage: 40,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card