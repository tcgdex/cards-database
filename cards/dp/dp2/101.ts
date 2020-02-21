import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-101",
	localId: 101,

	// Card informations
	name: {
		en: "Snover",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 459,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/101/high",
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
		name: {
			en: "Curiosity",
		},
		text: {
			en: "Look at your opponent's hand.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Snowball Fight",
		},
		text: {
			en: "Flip a coin. If tails, Snover does 10 damage to itself.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
