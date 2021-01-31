import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-197",

	localId: 197,

	name: {
		en: "Rillaboom",
	},


	illustrator: "5ban Graphics",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Thwackey",
	},



	hp: 170,

	type: [
		Type.GRASS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Voltage Beat",
	},

	text: {
		en: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.GRASS,
				Type.GRASS,
				Type.GRASS,
				Type.COLORLESS,
			],

			name: {
				en: "Hammer In",
			},


			damage: 140,

		},
	],

	weaknesses: [
		{
			type: Type.FIRE, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card