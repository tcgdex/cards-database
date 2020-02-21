import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-98",
	localId: 98,

	// Card informations
	name: {
		en: "Hitmonchan ex",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 107,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/98/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 57,
		name: "Hiromichi Sugiyama"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Steady Punch",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Sky Uppercut",
		},
		text: {
			en: "The attack's damage is not affected by Resistance.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
