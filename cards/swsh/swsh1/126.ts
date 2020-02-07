import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-126",
	localId: 126,

	// Card informations
	name: {
		en: "​Thievul",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/126/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/126/high.png",
		},
	},

	evolveFrom: {
		en: "Nickit",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Thief",
		},
		text: {
			en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Fang",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

