import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-75",
	localId: 75,

	// Card informations
	name: {
		en: "Buizel",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 99,
		name: "Kenkichi Toyama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
