import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-47",

	localId: 47,

	name: {
		en: "Vanilluxe",
	},


	illustrator: "kodama",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Vanillish",
	},



	hp: 150,

	type: [
		Type.WATER,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Bitter Cold",
	},

	text: {
		en: "Once during your turn, if this Pokémon is in the Active Spot, you may flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
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
				en: "Frost Smash",
			},


			damage: 90,

		},
	],

	weaknesses: [
		{
			type: Type.METAL, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card