import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-7",
	localId: 7,

	// Card informations
	name: {
		en: "Team Magma's Aggron",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
		Type.DARKNESS,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/7/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hiromichi Sugiyama",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Crush",
		},
		text: {
			en: "Flip a coin for each Energy attached to Team Magma's Aggron. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land Stream",
		},
		text: {
			en: "You may discard any number of basic Energy cards attached to Team Magma's Aggron. If you do, this attack does 50 damage plus 20 more damage for each basic Energy card you discarded.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	},{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
