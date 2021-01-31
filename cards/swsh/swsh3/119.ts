import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-119",

	localId: 119,

	name: {
		en: "Scizor VMAX",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Scizor V",
	},



	hp: 320,

	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Hard Scissors",
			},

			text: {
				en: "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			},

			damage: 90,

		},
		{
			cost: [
				Type.METAL,
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Max Steelspike",
			},


			damage: 190,

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