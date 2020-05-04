import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-140",

	localId: 140,

	name: {
		en: "Zamazenta",
	},

	tags: [
	],

	illustrator: "Hideki Ishikawa",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations






	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Guard Press",
			},

			text: {
				en: "During your opponent’s next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
			},

			damage: 30,

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Power Rush",
			},

			text: {
				en: "Flip a coin. If tails, during your next turn, this Pokémon can’t attack.",
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card