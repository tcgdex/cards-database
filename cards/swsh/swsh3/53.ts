import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-53",

	localId: 53,

	name: {
		en: "Dracovish",
	},


	illustrator: "Hitoshi Ariga",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Rare Fossil",
	},



	hp: 150,

	type: [
		Type.WATER,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Primal Law",
	},

	text: {
		en: "As long as this Pokémon is in the Active Spot, your opponent can’t play any Pokémon from their hand to evolve their Pokémon.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.WATER,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Hammer In",
			},


			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card