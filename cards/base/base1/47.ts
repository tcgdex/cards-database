import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-47",
	localId: 47,

	// Card informations
	name: {
		en: "Diglett",
	},

	hp: 30,

	type: [
		Type.FIGHTING,
	],

	dexId: 50,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/47/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 11,
		name: "Keiji Kinebuchi"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Dig",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Mud Slap",
		},
		damage: 30
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
		name: "Base",
		code: "base1"
	}
}

export default card
