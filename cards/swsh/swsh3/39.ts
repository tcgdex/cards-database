import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-39",

	localId: 39,

	name: {
		en: "Milotic",
	},


	illustrator: "AKIRA EGAWA",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Feebas",
	},



	hp: 120,

	type: [
		Type.WATER,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Bright Heal",
	},

	text: {
		en: "Once during your turn, you may heal 20 damage from each of your Pokémon.",
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
				en: "Surf",
			},


			damage: 80,

		},
	],

	weaknesses: [
		{
			type: Type.LIGHTNING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card