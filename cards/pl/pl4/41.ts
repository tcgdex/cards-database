import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-41",

	localId: 41,

	name: {
		en: "Haunter",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Tomokazu Komiya",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/41/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/41/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Gastly",
	},

	dexId: 93,



	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Hidden Poison",
	},

	text: {
		en: "If Haunter is your Active Pokémon and is damaged by an opponent's attack (even if Haunter is Knocked Out), the Attacking Pokémon is now Poisoned.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
			],

			name: {
				en: "Tongue Spring",
			},

			text: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

			value: "+20",

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