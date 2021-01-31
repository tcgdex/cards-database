import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-15",

	localId: 15,

	name: {
		en: "Drednaw VMAX",
	},


	illustrator: "aky CG Works",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Drednaw V",
	},



	hp: 320,

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
				en: "G-Max Headbutt",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 80 more damage.",
			},

			damage: "160+",

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