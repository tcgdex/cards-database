import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-68",
	localId: 68,

	// Card informations
	name: {
		en: "Vigoroth",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 288,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/68/high",
		},
	},

	evolveFrom: {
		en: "Slakoth",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wake-up Punch",
		},
		text: {
			en: "If Vigoroth evolved from Slakoth during this turn and Slakoth was Asleep, this attack's base damage is 60 instead of 10.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Swipes",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
