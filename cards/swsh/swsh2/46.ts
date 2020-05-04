import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-46",

	localId: 46,

	name: {
		en: "Seismitoad",
	},

	tags: [
	],

	illustrator: "SATOSHI NAKAI",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Palpitoad",
	},






	attacks: [
		{
			cost: [
				Type.WATER,
			],

			name: {
				en: "Split Spiral Punch",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Resonance",
			},

			text: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 120 more damage.",
			},

			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card