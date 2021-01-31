import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-123",

	localId: 123,

	name: {
		en: "Aggron",
	},


	illustrator: "Hasuno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Lairon",
	},



	hp: 160,

	type: [
		Type.METAL,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Sturdy",
	},

	text: {
		en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.METAL,
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Gigaton Stomp",
			},


			damage: 160,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],

	resistances: [
		{
			type: Type.GRASS, 

			value: "-30",

		},
	],

	retreat: 3,


	// Card Trainer/Energy informations

}

export default card