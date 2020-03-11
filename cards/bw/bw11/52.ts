import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-52",
	localId: 52,

	// Card informations
	name: {
		en: "Zekrom-EX",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 644,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Shizurow",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Glinting Claw",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strong Volt",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
