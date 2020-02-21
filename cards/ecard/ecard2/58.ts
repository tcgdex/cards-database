import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-58",
	localId: 58,

	// Card informations
	name: {
		en: "Seadra",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 117,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/58/high",
		},
	},

	evolveFrom: {
		en: "Horsea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Bullet",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to Seadra. This attack does 30 damage plus 10 more damage for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
