import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-103",

	localId: 103,

	name: {
		en: "Ariados",
	},


	illustrator: "Shin Nagasawa",

	rarity: Rarity.UNCOMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Spinarak",
	},



	hp: 110,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Spider Net",
	},

	text: {
		en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch 1 of your opponent’s Benched Evolution Pokémon with their Active Pokémon.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
				Type.COLORLESS,
			],

			name: {
				en: "Poison Sting",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 2,


	// Card Trainer/Energy informations

}

export default card