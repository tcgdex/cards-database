import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-8",
	localId: 8,

	// Card informations
	name: {
		en: "Houndoom",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/8/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Dark Flame",
		},
		text: {
			en: "Discard 1 Energy card attached to Houndoom or this attack does nothing. If there are any Energy cards in your discard pile, attach 1 of them to Houndoom.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Fang",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
