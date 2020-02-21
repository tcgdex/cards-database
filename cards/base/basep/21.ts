import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "basep-21",
	localId: 21,

	// Card informations
	name: {
		en: "Moltres",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/basep/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/basep/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Hyper Flame",
		},
		text: {
			en: "Flip a coin. If heads, discard 1 Energy card attached to Moltres. If tails, discard all Energy cards attached to Moltres. If you can't discard Energy cards, this attack does nothing.",
		},
		damage: 60
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Wizards Black Star Promos",
		code: "basep"
	}
}

export default card
