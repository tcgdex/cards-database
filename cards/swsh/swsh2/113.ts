import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-113",

	localId: 113,

	name: {
		en: "Galarian Weezing",
	},

	tags: [
	],

	illustrator: "Mitsuhiro Arita",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations
	evolveFrom: {
		en: "Koffing",
	},





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Neutralizing Gas",
	},

	text: {
		en: "As long as this Pokémon is in the Active Spot, your opponent’s Pokémon in play have no Abilities, except for Neutralizing Gas.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.DARKNESS,
			],

			name: {
				en: "Severe Poison",
			},

			text: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon during Pokémon Checkup.",
			},


		},
	],

	weaknesses: [
		{
			type: Type.FIGHTING, 

			value: "×2",

		},
	],


	retreat: 3,


	// Card Trainer/Energy informations

}

export default card