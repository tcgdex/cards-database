import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/ex/ex8/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



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
