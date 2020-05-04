import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-73",

	localId: 73,

	name: {
		en: "Morpeko",
	},

	tags: [
	],

	illustrator: "Kouki Saitou",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Torment",
			},

			text: {
				en: "Choose 1 of your opponent’s Active Pokémon’s attacks. During your opponent's next turn, that Pokémon can’t use that attack.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Spark",
			},

			text: {
				en: "This attack also does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card