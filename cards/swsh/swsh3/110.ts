import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-110",

	localId: 110,

	name: {
		en: "Hydreigon",
	},


	illustrator: "kawayoo",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Zweilous",
	},



	hp: 160,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Dark Squall",
	},

	text: {
		en: "As often as you like during your turn, you may attach a Darkness Energy card from your hand to 1 of your Pokémon.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Pitch-Black Fangs",
			},


			damage: 130,

		},
	],

	weaknesses: [
		{
			type: Type.GRASS, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card