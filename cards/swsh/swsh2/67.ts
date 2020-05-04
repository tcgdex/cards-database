import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-67",

	localId: 67,

	name: {
		en: "Boltund V",
	},

	tags: [
	],

	illustrator: "aky CG Works",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Electrify",
			},

			text: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck.",
			},


		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Bolt Storm",
			},

			text: {
				en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon.",
			},

			damage: "10+",

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