import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-26",

	localId: 26,

	name: {
		en: "Porygon-Z",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Nobuyuki Fujimoto",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/26/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/26/high",
			},

	},


	// Card Pokémon Informations

	dexId: 474,



	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Dowsing Code",
	},

	text: {
		en: "Once during your turn, when you put Porygon-Z from your hand onto your Bench, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and shuffle them into your deck.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Ambush",
			},

			text: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
			},

			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card