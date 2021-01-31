import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-104",

	localId: 104,

	name: {
		en: "Crobat V",
	},


	illustrator: "PLANETA Mochizuki",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 180,

	type: [
		Type.DARKNESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Dark Asset",
	},

	text: {
		en: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can’t use more than 1 Dark Asset Ability each turn.",
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
				en: "Venomous Fang",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
			},

			damage: 70,

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