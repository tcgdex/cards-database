import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-80",

	localId: 80,

	name: {
		en: "Shiinotic",
	},


	illustrator: "Misa Tsutsui",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Morelull",
	},



	hp: 110,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Flickering Light",
			},

			text: {
				en: "Flip a coin. If heads, during your opponent’s next turn, the Defending Pokémon can’t attack.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Fear the Forest",
			},

			text: {
				en: "If Glimwood Tangle is in play, this attack does 60 more damage.",
			},

			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card