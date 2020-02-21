import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-72",
	localId: 72,

	// Card informations
	name: {
		en: "Bisharp",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/72/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 10 more damage. If 2 of them are heads, this attack does 30 more damage. If all of them are heads, this attack does 60 more damage.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
