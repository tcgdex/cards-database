import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/pl/pl4'


const card: Card = {
	// Card Global Informations
	id: "pl4-11",

	localId: 11,

	name: {
		en: "Toxicroak",
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
				en: "https://assets.tcgdex.net/en/pl/pl4/11/low",
			},

			high: {
				en: "https://assets.tcgdex.net/en/pl/pl4/11/high",
			},

	},


	// Card Pokémon Informations
	evolveFrom: {
		en: "Croagunk",
	},

	dexId: 454,



	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Corner",
			},

			text: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},

			damage: 20,

		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Convert Blow",
			},

			text: {
				en: "If Toxicroak has any Psychic Energy attached to it, the Defending Pokémon is now Poisoned. If Toxicroak has any Fighting Energy attached to it, this attack does 30 damage plus 30 more damage.",
			},

			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: Type.PSYCHIC, 

			value: "+20",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card