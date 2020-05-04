import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-4",

	localId: 4,

	name: {
		en: "Scyther",
	},

	tags: [
	],

	illustrator: "KEIICHIRO ITO",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Swords Dance",
			},

			text: {
				en: "During your next turn, this Pokémon’s Blinding Scythe attack does 70 more damage (before applying Weakness and Resistance).",
			},


		},
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Blinding Scythe",
			},


			damage: 20,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card