import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh3'


const card: Card = {
	// Card Global Informations
	id: "swsh3-137",

	localId: 137,

	name: {
		en: "Dunsparce",
	},


	illustrator: "Kazuma Koda",

	rarity: Rarity.COMMON, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 60,

	type: [
		Type.COLORLESS,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Final Dig",
	},

	text: {
		en: "If this Pokémon is Knocked Out by damage from an attack from your opponent’s Pokémon, discard the top 2 cards of your opponent’s deck.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
			],

			name: {
				en: "Ram",
			},


			damage: 20,

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