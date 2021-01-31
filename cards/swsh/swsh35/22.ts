import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-22",

	localId: 22,

	name: {
		en: "Alcremie V",
	},


	illustrator: "Ayaka Yoshida",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 170,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Sugary Sprinkles",
			},

			text: {
				en: "Heal 30 damage from each of your Benched Pokémon.",
			},


		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Sweet Splash",
			},

			text: {
				en: "If the Defending Pokémon is a Basic Pokémon, it can’t attack during your opponent’s next turn.",
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card