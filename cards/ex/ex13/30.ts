import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-30",
	localId: 30,

	// Card informations
	name: {
		en: "Relicanth",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 215,
		type: AbilityType.POKEBODY,
		name: {
			en: "Aqua Lift",
		},
		text: {
			en: "If Relicanth has any Water Energy attached to it, the Retreat Cost for Relicanth is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Away",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
