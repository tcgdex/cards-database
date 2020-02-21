import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-103",
	localId: 103,

	// Card informations
	name: {
		en: "Cubone",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 104,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Beat",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bone Smash",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
