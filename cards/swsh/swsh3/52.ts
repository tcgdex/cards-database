import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-52",

	localId: 52,

	name: {
		en: "Toxapex",
	},


	illustrator: "Masakazu Fukuda",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Mareanie",
	},



	hp: 130,

	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Recover",
			},

			text: {
				en: "Discard an Energy from this Pokémon and heal all damage from it.",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Poisonous Whip",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card