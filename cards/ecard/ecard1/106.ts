import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Diglett",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/106/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/106/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 103,
		name: "Masako Yamashita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Fury Headbutt",
		},
		text: {
			en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
		},
		damage: 10
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
