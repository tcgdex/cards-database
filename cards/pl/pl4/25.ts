import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-25",

	localId: 25,

	name: {
		en: "Pichu",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,
	image: {
			low: {
				en: "https://assets.tcgdex.net/en/pl/pl4/25/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/25/high",
			},

	},


	// Card Pokémon Informations

	dexId: 172,



	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.POKEPOWER, 

	name: {
		en: "Baby Evolution",
	},

	text: {
		en: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.",
	},

}
,
	],

	attacks: [
		{

			name: {
				en: "Baby Steps",
			},

			text: {
				en: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Shuffle the other cards back into your deck.",
			},


		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "+10",

		},
	],

	resistances: [
		{
			type: Type.METAL, 

			value: "-20",

		},
	],

	retreat: 1,


	// Card Trainer/Energy informations

}

export default card