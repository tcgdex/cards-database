import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-92",

	localId: 92,

	name: {
		en: "Solrock",
	},


	illustrator: "Miki Tanaka",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 90,

	type: [
		Type.FIGHTING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Resistance Shade",
	},

	text: {
		en: "If you have Lunatone in play, your opponent’s Pokémon in play have no Resistance.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Rock Throw",
			},


			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card