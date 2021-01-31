import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-26",

	localId: 26,

	name: {
		en: "Machamp",
	},


	illustrator: "Anesaki Dynamic",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Machoke",
	},



	hp: 170,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Macho Revenge",
			},

			text: {
				en: "This attack does 20 damage for each Fighting Pokémon in your discard pile.",
			},

			damage: "20×",

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Dynamite Punch",
			},

			text: {
				en: "This Pokémon also does 50 damage to itself.",
			},

			damage: 200,

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card