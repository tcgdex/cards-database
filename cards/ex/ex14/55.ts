import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-55",
	localId: 55,

	// Card informations
	name: {
		en: "Lotad",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 270,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 215,
		type: AbilityType.POKEBODY,
		name: {
			en: "Aqua Lift",
		},
		text: {
			en: "If Lotad has any Water Energy attached to it, the Retreat Cost for Lotad is 0.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
