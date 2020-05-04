import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-22",

	localId: 22,

	name: {
		en: "Manectric",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mana Ibe",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/22/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/22/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Electrike",
	},

	dexId: 310,



	type: [
		Type.LIGHTNING,
	],


	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Second Bite",
			},

			text: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			},

			damage: "20+",

		},
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Swift",
			},

			text: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			},

			damage: 50,

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



	// Card Trainer/Energy informations

}

export default card