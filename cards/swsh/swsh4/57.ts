import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-57",

	localId: 57,

	name: {
		en: "Tynamo",
	},

	tags: [
	],

	illustrator: "sowsow",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Levitate",
	},

	text: {
		en: "If this Pokémon has any Energy attached, it has no Retreat Cost.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
			],

			name: {
				en: "Tiny Charge",
			},


			damage: 10,

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