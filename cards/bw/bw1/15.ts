import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-15",
	localId: 15,

	// Card informations
	name: {
		en: "Tepig",
		fr: "Gruikui",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 498,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/15/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/15/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

