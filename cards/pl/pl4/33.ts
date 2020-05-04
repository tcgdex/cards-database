import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-33",

	localId: 33,

	name: {
		en: "Bronzong",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/33/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/33/high",
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
			],

			name: {
				en: "Wide Laser",
			},

			text: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Hyper Beam",
			},

			text: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			},

			damage: 50,

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