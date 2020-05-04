import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-7",

	localId: 7,

	name: {
		en: "Probopass",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/7/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/7/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Nosepass",
	},

	dexId: 476,



	type: [
		Type.METAL,
	],

	abilities: [
		{
	type: AbilityType.POKEBODY, 

	name: {
		en: "Competitiveness",
	},

	text: {
		en: "If you don't have a Supporter card in play, each of Probopass's attacks does 30 more damage to the Active Pokémon (before applying Weakness and Resistance).",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
			],

			name: {
				en: "Top Chop",
			},

			text: {
				en: "Draw a card.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Tumbling Attack",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage.",
			},

			damage: "50+",

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