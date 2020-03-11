import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-20",
	localId: 20,

	// Card informations
	name: {
		en: "Lanturn",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/20/high",
		},
	},

	evolveFrom: {
		en: "Chinchou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Ball",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Conduction",
		},
		text: {
			en: "Discard all Energy cards attached to Lanturn. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
