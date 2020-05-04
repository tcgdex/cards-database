import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-99",

	localId: 99,

	name: {
		en: "Tangrowth LV. X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/99/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/99/high",
			},

	},


	// Card Pokémon Informations

	dexId: 465,



	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Healing Growth",
	},

	text: {
		en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 4 damage counters from 1 of your Pokémon. This power can't be used if Tangrowth is affected by a Special Condition.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.GRASS,
			],

			name: {
				en: "Big Growth",
			},

			text: {
				en: "Search your discard pile for as many Grass Energy cards as you like and attach them to your Pokémon in any way you like.",
			},


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
			type: Type.WATER, 

			value: "-20",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card