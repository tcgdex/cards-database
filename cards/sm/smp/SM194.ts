import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM194/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM194/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 196,
		name: "MPC Film"
	},



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

