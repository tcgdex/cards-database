import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-2",

	localId: 2,

	name: {
		en: "Froslass",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "TOKIYA",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/2/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/2/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Snorunt",
	},

	dexId: 478,



	type: [
		Type.WATER,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Snow Gift",
	},

	text: {
		en: "Once during your turn, when you play Froslass from your hand to evolve 1 of your Pokémon, you may search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
			],

			name: {
				en: "Ground Frost",
			},

			text: {
				en: "If there is any Stadium card in play, this attack does nothing.",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "+20",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card