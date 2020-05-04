import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-36",

	localId: 36,

	name: {
		en: "Gastly",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/36/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/36/high",
			},

	},


	// Card Pokémon Informations

	dexId: 92,



	type: [
		Type.PSYCHIC,
	],


	attacks: [
		{
			cost: [
				Type.PSYCHIC,
			],

			name: {
				en: "Lick",
			},

			text: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},

			damage: 10,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Night Shade",
			},

			text: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.COLORLESS, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card