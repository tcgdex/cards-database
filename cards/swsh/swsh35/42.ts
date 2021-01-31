import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh35'


const card: Card = {
	// Card Global Informations
	id: "swsh35-42",

	localId: 42,

	name: {
		en: "Scrafty",
	},


	illustrator: "tetsuya koizumi",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Scraggy",
	},



	hp: 120,

	type: [
		Type.DARKNESS,
	],


	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Corner",
			},

			text: {
				en: "During your opponent’s next turn, the Defending Pokémon can’t retreat.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Bad Brawl",
			},

			text: {
				en: "If you played Piers from your hand during this turn, this attack does 90 more damage.",
			},

			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card