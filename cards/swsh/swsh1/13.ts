import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Thwackey",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/13/high.png",
		},
	},

	evolveFrom: {
		en: "Grookey",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
		},
		damage: "50+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

