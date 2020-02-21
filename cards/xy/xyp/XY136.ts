import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY136",
	localId: "XY136",

	// Card informations
	name: {
		en: "Noctowl BREAK",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY136/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY136/high",
		},
	},

	evolveFrom: {
		en: "Noctowl",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Night Scan",
		},
		text: {
			en: "Your opponent reveals his or her hand. This attack does 30 more damage for each Trainer card you find there.",
		},
		damage: 60
	}],







	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
