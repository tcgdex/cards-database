import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-6",
	localId: 6,

	// Card informations
	name: {
		en: "Snivy",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 495,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/6/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Blade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
