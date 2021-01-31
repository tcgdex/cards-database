import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-9",

	localId: 9,

	name: {
		en: "Celebi",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.AMAZING, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 60,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Energy Press",
			},

			text: {
				en: "This attack does 30 damage for each Energy attached to your opponent’s Active Pokémon.",
			},

			damage: "30×",

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.PSYCHIC,
			],

			name: {
				en: "Amazing Bloom",
			},

			text: {
				en: "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			},


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