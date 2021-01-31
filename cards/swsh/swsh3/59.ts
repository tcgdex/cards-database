import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-59",

	localId: 59,

	name: {
		en: "Manectric",
	},


	illustrator: "nagimiso",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Electrike",
	},



	hp: 110,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Strafe",
			},

			text: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Flash Impact",
			},

			text: {
				en: "This attack also does 30 damage to 1 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 150,

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