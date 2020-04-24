import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM194",
	localId: "SM194",

	// Card informations
	name: {
		en: "Detective Pikachu",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,


	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MPC Film",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Brilliant Deduction",
		},
		text: {
			en: "Look at the top 4 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
