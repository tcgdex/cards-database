import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-33",

	localId: 33,

	name: {
		en: "Chandelure",
	},

	tags: [
	],

	illustrator: "Taira Akitsu",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Lampent",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Protective Glow",
	},

	text: {
		en: "All of your Pokémon that have Energy attached have no Weakness.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.FIRE,
				Type.COLORLESS,
			],

			name: {
				en: "Mirage Flare",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Confused.",
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: Type.WATER, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card