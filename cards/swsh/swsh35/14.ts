import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-14",

	localId: 14,

	name: {
		en: "Drednaw V",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 210,

	type: [
		Type.WATER,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Solid Shell",
	},

	text: {
		en: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Powerful Bite",
			},

			text: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 4,


	// Card Trainer/Energy informations

}

export default card