import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-108",
	localId: 108,

	// Card informations
	name: {
		en: "Rocket's Raikou ex",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/108/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunderous Blow",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Lightning Energy attached to Rocket's Raikou ex.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card

