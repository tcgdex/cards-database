import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-131",

	localId: 131,

	name: {
		en: "Probopass",
	},

	tags: [
	],

	illustrator: "Anesaki Dynamic",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Nosepass",
	},






	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Gravitational Drop",
			},

			text: {
				en: "This attack does 30 more damage for each Colorless in your opponent’s Active Pokémon’s Retreat Cost.",
			},

			damage: "10+",

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Heavy Impact",
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

	retreat: 4,


	// Card Trainer/Energy informations

}

export default card