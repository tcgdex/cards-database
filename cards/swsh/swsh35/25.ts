import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-25",

	localId: 25,

	name: {
		en: "Machoke",
	},

	tags: [
	],

	illustrator: "AKIRA EGAWA",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/25/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/swsh/swsh35/25/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Machop",
	},



	hp: 110,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Low Kick",
			},


			damage: 30,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Pummel",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 70 more damage.",
			},

			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card