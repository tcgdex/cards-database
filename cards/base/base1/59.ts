import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base1-59",
	localId: 59,

	// Card informations
	name: {
		en: "Poliwag",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 60,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/59/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
		},
		text: {
			en: "Does 10 damage plus 10 damage for each Energy attached to Poliwag but not used to pay for this attack's Energy cost. Extra Energy after the end don't count.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
