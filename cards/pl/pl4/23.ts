import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-23",

	localId: 23,

	name: {
		en: "Omastar",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hajime Kusajima",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/23/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/23/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Omanyte",
	},

	dexId: 139,



	type: [
		Type.WATER,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Time Spiral",
			},

			text: {
				en: "Choose 1 of your opponent's Evolved Pokémon. Remove the highest Stage Evolution card from that Pokémon and have your opponent shuffle that card into his or her deck.",
			},


		},
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Primal Tentacles",
			},

			text: {
				en: "Does 30 damage plus 10 more damage for each Helix Fossil, Dome Fossil, and Old Amber in your discard pile.",
			},

			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "+30",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card