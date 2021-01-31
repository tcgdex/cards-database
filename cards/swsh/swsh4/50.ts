import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-50",

	localId: 50,

	name: {
		en: "Raikou",
	},


	illustrator: "Hideki Ishikawa",

	rarity: Rarity.AMAZING, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 110,

	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.LIGHTNING,
				Type.METAL,
			],

			name: {
				en: "Amazing Shot",
			},

			text: {
				en: "This attack also does 120 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card