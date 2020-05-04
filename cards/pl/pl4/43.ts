import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-43",

	localId: 43,

	name: {
		en: "Luxio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/43/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/43/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Shinx",
	},

	dexId: 404,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Kick",
			},


			damage: 20,

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Discharge",
			},

			text: {
				en: "Discard all Lightning Energy attached to Luxio. Flip a coin for each Energy card you discarded. This attack does 40 damage times the number of heads.",
			},

			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.METAL, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card