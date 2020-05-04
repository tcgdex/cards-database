import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-15",

	localId: 15,

	name: {
		en: "Cherrim",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/15/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/15/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Cherubi",
	},

	dexId: 421,



	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Cloudy Sky",
	},

	text: {
		en: "If any of your Grass Pokémon or Fire Pokémon would be damaged by an attack, reduce that damage by 10 (after applying Weakness and Resistance).",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Worry Seed",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "+20",

		},
	],

	resistances: [
		{
			type: Type.WATER, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card