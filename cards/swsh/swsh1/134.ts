import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-134",
	localId: 134,

	// Card informations
	name: {
		en: "Bisharp",
	},

	hp: 120,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/134/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/134/high.png",
		},
	},

	evolveFrom: {
		en: "Pawniard",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge Order",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Pawniard.",
		},
		damage: "30+"
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Slicing Blade",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
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

