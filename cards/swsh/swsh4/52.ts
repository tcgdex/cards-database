import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-52",

	localId: 52,

	name: {
		en: "Manectric",
	},

	tags: [
	],

	illustrator: "SATOSHI NAKAI",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Electrike",
	},



	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "High Speed",
	},

	text: {
		en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Electric Ball",
			},


			damage: 100,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],




	// Card Trainer/Energy informations

}

export default card