import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-29",
	localId: 29,

	// Card informations
	name: {
		en: "Lugia",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/29/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aeroblast",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card

