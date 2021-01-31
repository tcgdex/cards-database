import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-94",

	localId: 94,

	name: {
		en: "Hippowdon",
	},


	illustrator: "KEIICHIRO ITO",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Hippopotas",
	},



	hp: 150,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Triple Smash",
			},

			text: {
				en: "Flip 3 coins. This attack does 80 damage for each heads.",
			},

			damage: "80×",

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Land Crush",
			},


			damage: 150,

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