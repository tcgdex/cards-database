import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-28",

	localId: 28,

	name: {
		en: "Rapidash",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Lee HyunJung",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/28/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/28/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Ponyta",
	},

	dexId: 78,



	type: [
		Type.FIRE,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Wild Guard",
	},

	text: {
		en: "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
			],

			name: {
				en: "Fire Mane",
			},


			damage: 20,

		},
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Rising Lunge",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
			},

			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "+20",

		},
	],




	// Card Trainer/Energy informations

}

export default card