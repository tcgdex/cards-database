import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-107",

	localId: 107,

	name: {
		en: "Liepard",
	},


	illustrator: "Hasuno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Purrloin",
	},



	hp: 100,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Limber",
	},

	text: {
		en: "This Pokémon can’t be Paralyzed.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Slashing Claw",
			},


			damage: 90,

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