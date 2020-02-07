import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-125",
	localId: 125,

	// Card informations
	name: {
		en: "Nickit",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Instigate",
		},
		text: {
			en: "Your opponent shuffles their hand and puts it on the bottom of their deck. If they put any cards on the bottom of their deck in this way, they draw 3 cards.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

