import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-33",
	localId: 33,

	// Card informations
	name: {
		en: "Lombre",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 271,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/33/high",
		},
	},

	evolveFrom: {
		en: "Lotad",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 215,
		type: AbilityType.POKEBODY,
		name: {
			en: "Aqua Lift",
		},
		text: {
			en: "If Lombre has any Water Energy attached to it, the Retreat Cost for Lombre is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
