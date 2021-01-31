import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-78",

	localId: 78,

	name: {
		en: "Dedenne",
	},


	illustrator: "Shibuzoh.",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 70,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Mad Party",
			},

			text: {
				en: "This attack does 20 damage for each Pokémon in your discard pile that has the Mad Party attack.",
			},

			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card