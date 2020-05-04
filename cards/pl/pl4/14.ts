import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-14",

	localId: 14,

	name: {
		en: "Bronzong",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/14/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/14/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Bronzor",
	},

	dexId: 437,



	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Oracle Arrow",
			},

			text: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Antigravity",
			},

			text: {
				en: "The Retreat Cost for Bronzong is 0 until the end of your next turn.",
			},

			damage: 60,

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
			type: Type.PSYCHIC, 

			value: "-20",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card