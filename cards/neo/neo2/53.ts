import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Caterpie",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 10,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spin Tackle",
		},
		text: {
			en: "Caterpie does 10 damage to itself.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
