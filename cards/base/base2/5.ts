import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "base2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Kangaskhan",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/5/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Fetch",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Comet Punch",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Jungle",
		code: "base2"
	}
}

export default card
