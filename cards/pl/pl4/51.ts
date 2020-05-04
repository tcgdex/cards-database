import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-51",

	localId: 51,

	name: {
		en: "Wormadam Trash Cloak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/51/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/51/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Burmy Trash Cloak",
	},

	dexId: 413,



	type: [
		Type.METAL,
	],


	attacks: [
		{
			cost: [
				Type.METAL,
			],

			name: {
				en: "Cloak Shard",
			},

			text: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. If you have Wormadam Plant Cloak in play, this attack does 40 damage to that Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},


		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Serve Trash",
			},

			text: {
				en: "You may search your opponent's discard pile for any 1 card, show it to your opponent, and put it on top of his or her deck.",
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
			type: Type.PSYCHIC, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card