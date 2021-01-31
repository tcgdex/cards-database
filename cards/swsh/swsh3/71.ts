import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-71",

	localId: 71,

	name: {
		en: "Granbull",
	},


	illustrator: "SATOSHI NAKAI",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Snubbull",
	},



	hp: 130,

	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Jaw Lock",
			},

			text: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},

			damage: 50,

		},
		{
			cost: [
				Type.PSYCHIC,
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Headbutt Bounce",
			},


			damage: 130,

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