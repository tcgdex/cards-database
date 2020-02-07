import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-136",
	localId: 136,

	// Card informations
	name: {
		en: "Cufant",
	},

	hp: 100,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/136/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Stomp",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
		},
		damage: "20+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

