import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM06",
	localId: "SM06",

	// Card informations
	name: {
		en: "Rockruff",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 744,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM06/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM06/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Throw",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
