import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-156",

	localId: 156,

	name: {
		en: "Corviknight",
	},


	illustrator: "Kouki Saitou",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Corvisquire",
	},



	hp: 160,

	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Flying Taxi",
	},

	text: {
		en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 1 of your Pokémon, except any Corviknight, and all attached cards into your hand.",
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
				en: "Blasting Wind",
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

	resistances: [
		{
			type: Type.FIGHTING, 

			value: "-30",

		},
	],

	retreat: 2,


	// Card Trainer/Energy informations

}

export default card