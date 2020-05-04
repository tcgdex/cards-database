import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-18",

	localId: 18,

	name: {
		en: "Glalie",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hiroki Fuchino",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/18/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/18/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Snorunt",
	},

	dexId: 362,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Wreck",
			},

			text: {
				en: "If there is any Stadium card in play, this attack does 20 damage plus 50 more damage. Discard that Stadium card.",
			},

			damage: "20+",

		},
		{
			cost: [
				Type.WATER,
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Avalanche",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "+20",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card