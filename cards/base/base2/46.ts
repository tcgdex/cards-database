import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-46",
	localId: 46,

	// Card informations
	name: {
		en: "Seaking",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/46/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Horn Attack",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Waterfall",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
