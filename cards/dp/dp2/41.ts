import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Bayleef",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 153,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/41/high",
		},
	},

	evolveFrom: {
		en: "Chikorita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Evolution Impulse",
		},
		text: {
			en: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Boomerang",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
