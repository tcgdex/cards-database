import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-26",
	localId: 26,

	// Card informations
	name: {
		en: "Anorith",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 347,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/26/high",
		},
	},

	evolveFrom: {
		en: "Claw Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 75,
		type: AbilityType.POKEBODY,
		name: {
			en: "Solid Shell",
		},
		text: {
			en: "Any damage done to Anorith by attacks is reduced by 10 (after applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 30 more damage. If all of them are heads, this attack does 10 damage plus 50 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
