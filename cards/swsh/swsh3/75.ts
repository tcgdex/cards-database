import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-75",

	localId: 75,

	name: {
		en: "Gothitelle",
	},


	illustrator: "Eri Yamaki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Gothorita",
	},



	hp: 140,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Mind Bend",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},

			damage: 40,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Bend",
			},

			text: {
				en: "Choose 2 random cards from your opponent’s hand. Your opponent reveals those cards and shuffles them into their deck.",
			},

			damage: 90,

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

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card