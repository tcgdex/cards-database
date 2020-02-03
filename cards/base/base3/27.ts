import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Moltres",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/27/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Wildfire",
		},
		text: {
			en: "You may discard any number of R Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Dive Bomb",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card

