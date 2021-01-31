import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-18",

	localId: 18,

	name: {
		en: "Golisopod",
	},


	illustrator: "Ryuta Fuse",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Wimpod",
	},



	hp: 130,

	type: [
		Type.GRASS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Hard Times Slash",
			},

			text: {
				en: "This attack does 50 more damage for each of your opponent’s Pokémon V and Pokémon-GX in play.",
			},

			damage: "30+",

		},
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Smash Turn",
			},

			text: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card