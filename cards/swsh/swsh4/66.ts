import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import set from '../../../sets/swsh/swsh4'


const card: Card = {
	// Card Global Informations
	id: "swsh4-66",

	localId: 66,

	name: {
		en: "Shedinja",
	},

	tags: [
	],

	illustrator: "Tomokazu Komiya",

	rarity: Rarity.RARE, 

	category: Category.POKEMON, 

	set,


	// Card Pokémon Informations



	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	abilities: [
		{
	type: AbilityType.TALENT, 

	name: {
		en: "Shell Survival",
	},

	text: {
		en: "Put this Pokémon into play only with the effect of Ninjask’s Cast-Off Shell Ability. (When you are setting up to play, you cannot put it face down as your Active Pokémon or on your Bench.)",
	},

}
,
	],

	attacks: [
		{
			cost: [
				Type.COLORLESS,
				Type.COLORLESS,
				Type.COLORLESS,
			],

			name: {
				en: "Life Squeeze",
			},

			text: {
				en: "Put damage counters on your opponent’s Active Pokémon until its remaining HP is 10.",
			},


		},
	],



	retreat: 1,


	// Card Trainer/Energy informations

}

export default card