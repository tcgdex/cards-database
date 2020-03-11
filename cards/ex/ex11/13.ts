import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-13",
	localId: 13,

	// Card informations
	name: {
		en: "Rayquaza δ",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
		Type.METAL,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/13/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 833,
		type: AbilityType.POKEBODY,
		name: {
			en: "Delta Guard",
		},
		text: {
			en: "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Power Blow",
		},
		text: {
			en: "Does 10 damage times the amount of Energy attached to Rayquaza.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Storm",
		},
		text: {
			en: "Put 7 damage counters on Rayquaza.",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
