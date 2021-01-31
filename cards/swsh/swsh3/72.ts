import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-72",

	localId: 72,

	name: {
		en: "Lunatone",
	},


	illustrator: "Miki Tanaka",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 90,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Future Sight",
			},

			text: {
				en: "Look at the top 4 cards of either player’s deck and put them back in any order.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Psychic",
			},

			text: {
				en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
			},

			damage: "20+",

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