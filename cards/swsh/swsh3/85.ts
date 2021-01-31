import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-85",

	localId: 85,

	name: {
		en: "Dugtrio",
	},


	illustrator: "Yukiko Baba",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Diglett",
	},



	hp: 90,

	type: [
		Type.FIGHTING,
	],


	attacks: [
		{
			cost: [
				Type.FIGHTING,
			],

			name: {
				en: "Dig",
			},

			text: {
				en: "Flip a coin. If heads, during your opponent’s next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			},

			damage: 30,

		},
		{
			cost: [
				Type.FIGHTING,
				Type.COLORLESS,
			],

			name: {
				en: "Mud Bomb",
			},


			damage: 70,

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