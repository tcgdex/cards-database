import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-183",

	localId: 183,

	name: {
		en: "Dragapult V",
	},

	tags: [
	],

	illustrator: "aky CG Works",

	rarity: Rarity.ULTRARARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Bite",
			},


			damage: 30,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
			],

			name: {
				en: "Jet Assault",
			},

			text: {
				en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 80 more damage.",
			},

			damage: "60+",

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