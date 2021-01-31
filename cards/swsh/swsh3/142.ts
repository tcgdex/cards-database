import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-142",

	localId: 142,

	name: {
		en: "Delcatty",
	},


	illustrator: "Tika Matsuno",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Skitty",
	},



	hp: 100,

	type: [
		Type.COLORLESS,
	],


	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Captivating Tail",
			},

			text: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			},


		},
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Moon Impact",
			},


			damage: 90,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 1,


	// Card Trainer/Energy informations

}

export default card