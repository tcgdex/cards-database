import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh2'


const card: Card = {
	// Card Global Informations
	id: "swsh2-72",

	localId: 72,

	name: {
		en: "Pincurchin V",
	},

	tags: [
	],

	illustrator: "PLANETA Igarashi",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations





	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Counterattack Kerzap",
	},

	text: {
		en: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), flip 3 coins. For each heads, put 3 damage counters on the Attacking Pokémon.",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.LIGHTNING,
				Type.LIGHTNING,
				Type.COLORLESS,
			],

			name: {
				en: "Sparking Strike",
			},


			damage: 120,

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