import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-71",

	localId: 71,

	name: {
		en: "Dusknoir",
	},

	tags: [
	],

	illustrator: "Shigenori Negishi",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Dusclops",
	},



	hp: 150,

	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Spectral Breach",
	},

	text: {
		en: "All Special Energy attached to Pokémon (both yours and your opponent’s) provide Colorless Energy and have no other effect.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.PSYCHIC,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Spooky Shot",
			},


			damage: 120,

		},
	],

	weaknesses: [
		{
			type: Type.DARKNESS, 

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