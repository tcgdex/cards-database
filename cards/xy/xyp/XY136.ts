import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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


	evolveFrom: {
		en: "Noctowl",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



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







	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
