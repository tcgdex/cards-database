import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-37",
	localId: 37,

	// Card informations
	name: {
		en: "Oshawott",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 501,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/37/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/37/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Razor Shell",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card

